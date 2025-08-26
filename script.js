// Initialisation Firebase avec Cloud Firestore
const firebaseConfig = 
    authDomain: "login-ec53a.firebaseapp.com",
    projectId: "login-ec53a",
    storageBucket: "login-ec53a.appspot.com"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Fonction de notification
function showNotification(message, isSuccess = true) {
    // Créer le style CSS pour les notifications si il n'existe pas
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #28a745;
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                z-index: 10000;
                opacity: 0;
                transform: translateY(-20px);
                transition: opacity 0.3s, transform 0.3s;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .notification.error {
                background: #dc3545;
            }
        `;
        document.head.appendChild(style);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${isSuccess ? '' : 'error'}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Fonction pour formater la date
function formatDate(timestamp) {
    if (!timestamp) return 'Date non disponible';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des modales
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
            if (auth.currentUser) {
                window.location.href = 'moncompte.html';
            } else {
                loginModal.style.display = 'block';
            }
        });
    }

    // Navigation entre modales
    if (showRegister) {
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    }

    // Fermeture des modales
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === registerModal) registerModal.style.display = 'none';
    });

    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const button = document.getElementById('button');
            const originalText = button.value;
            
            button.disabled = true;
            button.value = "Envoi en cours...";
            
            try {
                // Enregistrement dans Firestore
                await db.collection('contacts').add({
                    name: contactForm.name.value,
                    email: contactForm.email.value,
                    message: contactForm.message.value,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                // Envoi par EmailJS
                await emailjs.sendForm('default_service', 'template_nu2qbqm', contactForm);
                
                showNotification('Message envoyé avec succès !');
                contactForm.reset();
            } catch (error) {
                console.error('Erreur:', error);
                showNotification("Erreur lors de l'envoi du message", false);
            } finally {
                button.disabled = false;
                button.value = originalText;
            }
        });
    }

    // Connexion utilisateur
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = loginForm.loginEmail.value;
            const password = loginForm.loginPassword.value;
            
            try {
                await auth.signInWithEmailAndPassword(email, password);
                showNotification('Connexion réussie !');
                loginModal.style.display = 'none';
                if (loginLink) loginLink.textContent = 'Mon compte';
            } catch (error) {
                console.error('Erreur de connexion:', error);
                showNotification('Erreur: ' + error.message, false);
            }
        });
    }

    // Inscription utilisateur
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = registerForm.registerName.value;
            const email = registerForm.registerEmail.value;
            const password = registerForm.registerPassword.value;
            const confirmPassword = registerForm.registerConfirmPassword.value;
            
            // Validation des mots de passe
            if (password !== confirmPassword) {
                showNotification('Les mots de passe ne correspondent pas', false);
                return;
            }
            
            try {
                // Création de l'utilisateur
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                
                // Enregistrement dans Firestore
                await db.collection('users').doc(userCredential.user.uid).set({
                    name: name,
                    email: email,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                showNotification('Inscription réussie !');
                registerModal.style.display = 'none';
                if (loginLink) loginLink.textContent = 'Mon compte';
            } catch (error) {
                console.error('Erreur d\'inscription:', error);
                showNotification('Erreur: ' + error.message, false);
            }
        });
    }

    // Vérification de l'état d'authentification
    auth.onAuthStateChanged(user => {
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
            loginLink.textContent = user ? 'Mon compte' : 'Connexion';
        }
        
        // Mettre à jour la dernière connexion dans Firestore
        if (user) {
            db.collection('users').doc(user.uid).update({
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            }).catch(error => {
                console.error('Erreur mise à jour dernière connexion:', error);
            });
        }
    });

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Gestion des erreurs Firebase globales
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('Utilisateur connecté:', user.email);
        } else {
            console.log('Utilisateur non connecté');
        }
    }, error => {
        console.error('Erreur d\'authentification:', error);
    });
});

// Fonction utilitaire pour vérifier la connexion
function checkAuth() {
    return new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(!!user);
        });
    });
}
// Export des fonctions pour une utilisation globale (si nécessaire)
window.firebaseAuth = auth;
window.firebaseDB = db;
window.showNotification = showNotification;
window.checkAuth = checkAuth;
