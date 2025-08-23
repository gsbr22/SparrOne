// Initialisation Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzMi3F5vLM0bYxTY1KuBJf7eD6Nx96wsQ",
    authDomain: "login-ec53a.firebaseapp.com",
    projectId: "login-ec53a",
    storageBucket: "login-ec53a.appspot.com",
    messagingSenderId: "123644267529",
    appId: "1:123644267529:web:5409efdf896971c655bcd8"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Initialisation d'EmailJS (vérifiez que votre ID est correct)
emailjs.init('LDYR_83BF5t-wB9h2');

/**
 * Affiche une notification temporaire à l'utilisateur
 * @param {string} message - Le message à afficher
 * @param {boolean} isSuccess - true pour succès (vert), false pour erreur (rouge)
 */
function showNotification(message, isSuccess = true) {
    // Vérifie si une notification existe déjà pour éviter les doublons
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        document.body.removeChild(existingNotification);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? '' : 'error'}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.3s, transform 0.3s;
        ${isSuccess ? 'background: #28a745;' : 'background: #dc3545;'}
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Animation de sortie après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des modales de connexion/inscription
    const loginLink = document.getElementById('loginLink');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeButtons = document.querySelectorAll('.close');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    // Gestion du lien de connexion
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            const user = auth.currentUser;
            if (user) {
                // Utilisateur connecté : redirection vers la page de compte
                window.location.href = 'moncompte.html';
            } else {
                // Utilisateur non connecté : affichage de la modale
                if (loginModal) {
                    loginModal.style.display = 'block';
                }
            }
        });
    }

    // Navigation entre modales connexion/inscription
    if (showRegister) {
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginModal) loginModal.style.display = 'none';
            if (registerModal) registerModal.style.display = 'block';
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            if (registerModal) registerModal.style.display = 'none';
            if (loginModal) loginModal.style.display = 'block';
        });
    }

    // Fermeture des modales
    if (closeButtons.length > 0) {
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (loginModal) loginModal.style.display = 'none';
                if (registerModal) registerModal.style.display = 'none';
            });
        });
    }

    // Fermeture des modales en cliquant à l'extérieur
    window.addEventListener('click', (e) => {
        if (loginModal && e.target === loginModal) loginModal.style.display = 'none';
        if (registerModal && e.target === registerModal) registerModal.style.display = 'none';
    });

    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('input[type="submit"]') || document.getElementById('button');
            
            if (button) {
                button.disabled = true;
                button.value = "Envoi en cours...";
            }
            
            // Préparation des données pour Firebase
            const contactData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                message: contactForm.message.value,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            };
            
            // Enregistrement dans Firebase
            database.ref('contacts').push(contactData)
            .then(() => {
                // Envoi par EmailJS
                return emailjs.sendForm('default_service', 'template_nu2qbqm', contactForm);
            })
            .then(() => {
                showNotification('Message envoyé avec succès ! Nous vous répondrons rapidement.');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Erreur:', error);
                showNotification("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.", false);
            })
            .finally(() => {
                if (button) {
                    button.disabled = false;
                    button.value = "Envoyer le message";
                }
            });
        });
    }

    // Formulaire de connexion
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = loginForm.loginEmail.value;
            const password = loginForm.loginPassword.value;
            
            auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                showNotification('Connexion réussie ! Bienvenue sur SparrOne.');
                if (loginModal) loginModal.style.display = 'none';
                if (loginLink) loginLink.textContent = 'Mon compte';
            })
            .catch(error => {
                console.error('Erreur de connexion:', error);
                let errorMessage = 'Erreur lors de la connexion. ';
                
                switch(error.code) {
                    case 'auth/user-not-found':
                        errorMessage += 'Aucun compte trouvé avec cet email.';
                        break;
                    case 'auth/wrong-password':
                        errorMessage += 'Mot de passe incorrect.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage += 'Format d\'email invalide.';
                        break;
                    default:
                        errorMessage += error.message;
                }
                
                showNotification(errorMessage, false);
            });
        });
    }

    // Formulaire d'inscription
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Vérification de la correspondance des mots de passe
            if (registerForm.registerPassword.value !== registerForm.registerConfirmPassword.value) {
                showNotification('Les mots de passe ne correspondent pas.', false);
                return;
            }
            
            const email = registerForm.registerEmail.value;
            const password = registerForm.registerPassword.value;
            const name = registerForm.registerName.value;
            
            auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Enregistrement des informations supplémentaires dans la base de données
                return database.ref('users/' + userCredential.user.uid).set({
                    name: name,
                    email: email,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                    lastLogin: firebase.database.ServerValue.TIMESTAMP
                });
            })
            .then(() => {
                showNotification('Inscription réussie ! Bienvenue sur SparrOne.');
                if (registerModal) registerModal.style.display = 'none';
                if (loginLink) loginLink.textContent = 'Mon compte';
            })
            .catch(error => {
                console.error('Erreur d\'inscription:', error);
                let errorMessage = 'Erreur lors de l\'inscription. ';
                
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage += 'Un compte existe déjà avec cet email.';
                        break;
                    case 'auth/weak-password':
                        errorMessage += 'Le mot de passe est trop faible.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage += 'Format d\'email invalide.';
                        break;
                    default:
                        errorMessage += error.message;
                }
                
                showNotification(errorMessage, false);
            });
        });
    }

    // Vérification de l'état d'authentification en temps réel
    auth.onAuthStateChanged(user => {
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
            loginLink.textContent = user ? 'Mon compte' : 'Connexion';
            
            // Mise à jour de la dernière connexion
            if (user) {
                database.ref('users/' + user.uid).update({
                    lastLogin: firebase.database.ServerValue.TIMESTAMP
                }).catch(error => {
                    console.error('Erreur mise à jour lastLogin:', error);
                });
            }
        }
    });

    // Navigation fluide pour les ancres internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Gestion des erreurs Firebase globales
    auth.onAuthStateChanged(() => {}, (error) => {
        console.error('Erreur d\'authentification Firebase:', error);
    });
});

// Gestion des erreurs non capturées
window.addEventListener('error', (e) => {
    console.error('Erreur non capturée:', e.error);
});

// Export pour une utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { auth, database };
}
