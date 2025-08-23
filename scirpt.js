const _0xf9edf1 = _0x420e;
function _0x420e(_0x38edc8, _0x65ef0d) {
    const _0x3242a9 = _0x2ea9();
    _0x420e = function (_0x55b101, _0x3357a1) {
        _0x55b101 = _0x55b101 - (-0xd72 + -0x1c57 * 0x1 + 0x1 * 0x2a44);
        let _0x3b6a30 = _0x3242a9[_0x55b101];
        return _0x3b6a30;
    };
    return _0x420e(_0x38edc8, _0x65ef0d);
}
(function (_0x4319d9, _0x192ea4) {
    const _0x29bad5 = _0x420e;
    const _0x38e79a = _0x4319d9();
    while (!![]) {
        try {
            const _0xdb2e5b = -parseInt(_0x29bad5(0x8e)) / (0x19a4 + 0x10c8 + -0x1 * 0x2a6b) * (-parseInt(_0x29bad5(0xc2)) / (-0x2d7 * 0x3 + 0x13 * 0x17f + -0x1 * 0x13e6)) + parseInt(_0x29bad5(0xcc)) / (-0xa4 * -0x27 + -0x351 + -0x56a * 0x4) + parseInt(_0x29bad5(0x84)) / (0xbe * -0x23 + 0x2 * 0x3d4 + 0x1256) * (parseInt(_0x29bad5(0xaa)) / (-0x4e * -0x7 + -0x1b1 * -0x4 + -0x8e1 * 0x1)) + parseInt(_0x29bad5(0xa4)) / (-0xd * -0xdc + -0x9e6 + -0x140) * (-parseInt(_0x29bad5(0xd4)) / (-0x17d0 + 0x42f * 0x3 + 0x11 * 0xaa)) + -parseInt(_0x29bad5(0x9e)) / (0x16ea + 0x203d + -0x371f) * (-parseInt(_0x29bad5(0xdd)) / (-0x15a9 + 0x503 + 0x10af)) + -parseInt(_0x29bad5(0xa1)) / (-0x2 * -0x660 + 0x256a + -0x3220) + -parseInt(_0x29bad5(0xab)) / (0xe04 + -0x19 * -0x125 + -0x154b * 0x2) * (parseInt(_0x29bad5(0x80)) / (0x1 * -0x2275 + -0x2 * 0x1245 + 0x470b));
            if (_0xdb2e5b === _0x192ea4) {
                break;
            } else {
                _0x38e79a['push'](_0x38e79a['shift']());
            }
        } catch (_0x127281) {
            _0x38e79a['push'](_0x38e79a['shift']());
        }
    }
}(_0x2ea9, -0x2d117 + 0x32805 * -0x1 + 0x1b * 0x6a4d));
const firebaseConfig = {
    'apiKey': _0xf9edf1(0xb4),
    'authDomain': _0xf9edf1(0xb9),
    'projectId': _0xf9edf1(0x7f),
    'storageBucket': _0xf9edf1(0xae),
    'messagingSenderId': _0xf9edf1(0xbb),
    'appId': '1:123644267529:web:5409efdf896971c655bcd8'
};
firebase[_0xf9edf1(0xdb)](firebaseConfig);
const auth = firebase['auth']();
const db = firebase['firestore']();
emailjs['init'](_0xf9edf1(0x9f));
function showNotification(_0x5c97c5, _0x3f9251 = !![]) {
    const _0x413203 = _0xf9edf1;
    if (!document[_0x413203(0x81)](_0x413203(0xa0))) {
        const _0x4d1a38 = document[_0x413203(0xba)](_0x413203(0xc0));
        _0x4d1a38['id'] = _0x413203(0xa0);
        _0x4d1a38[_0x413203(0xb0)] = _0x413203(0xaf);
        document[_0x413203(0x95)][_0x413203(0xe1)](_0x4d1a38);
    }
    const _0x4fc408 = document['createElement'](_0x413203(0x9c));
    _0x4fc408[_0x413203(0x98)] = _0x413203(0x99) + (_0x3f9251 ? '' : _0x413203(0x8c));
    _0x4fc408[_0x413203(0xb0)] = _0x5c97c5;
    document[_0x413203(0x8b)]['appendChild'](_0x4fc408);
    setTimeout(() => {
        const _0x102096 = _0x413203;
        _0x4fc408[_0x102096(0xc0)]['opacity'] = '1';
        _0x4fc408[_0x102096(0xc0)][_0x102096(0xe0)] = _0x102096(0x7c);
    }, -0x1f23 * -0x1 + 0x2fe + 0x21bd * -0x1);
    setTimeout(() => {
        const _0xbc3448 = _0x413203;
        _0x4fc408[_0xbc3448(0xc0)][_0xbc3448(0xb5)] = '0';
        setTimeout(() => {
            const _0x582fbc = _0xbc3448;
            if (_0x4fc408['parentNode']) {
                document[_0x582fbc(0x8b)][_0x582fbc(0xb1)](_0x4fc408);
            }
        }, -0xbd8 * -0x2 + -0x231b + 0x1 * 0xc97);
    }, 0xeb8 + -0x6ff + 0x5d * 0xb);
}
function formatDate(_0x4bfbd3) {
    const _0x273775 = _0xf9edf1;
    if (!_0x4bfbd3)
        return _0x273775(0x85);
    const _0xb2e1b8 = _0x4bfbd3[_0x273775(0xdf)] ? _0x4bfbd3['toDate']() : new Date(_0x4bfbd3);
    return new Intl[(_0x273775(0x7d))](_0x273775(0x8f), {
        'day': '2-digit',
        'month': _0x273775(0xda),
        'year': _0x273775(0xad),
        'hour': '2-digit',
        'minute': _0x273775(0xda)
    })['format'](_0xb2e1b8);
}
document[_0xf9edf1(0xb7)](_0xf9edf1(0x7e), function () {
    const _0x344276 = _0xf9edf1;
    const _0x5c45d7 = document[_0x344276(0x81)](_0x344276(0xdc));
    const _0x177a89 = document['getElementById'](_0x344276(0xc8));
    const _0x46ddd6 = document['getElementById']('registerModal');
    const _0x2b4969 = document['querySelectorAll']('.close');
    const _0x2ea9f4 = document['getElementById']('showRegister');
    const _0x4691a2 = document[_0x344276(0x81)](_0x344276(0x86));
    if (_0x5c45d7) {
        _0x5c45d7[_0x344276(0xb7)](_0x344276(0x7b), function (_0x212d35) {
            const _0x5ccb7d = _0x344276;
            _0x212d35[_0x5ccb7d(0xd9)]();
            if (auth[_0x5ccb7d(0xa9)]) {
                window[_0x5ccb7d(0x9a)][_0x5ccb7d(0x92)] = 'moncompte.html';
            } else {
                _0x177a89[_0x5ccb7d(0xc0)][_0x5ccb7d(0x96)] = _0x5ccb7d(0x88);
            }
        });
    }
    if (_0x2ea9f4) {
        _0x2ea9f4[_0x344276(0xb7)](_0x344276(0x7b), _0x27211d => {
            const _0x3f2e22 = _0x344276;
            _0x27211d['preventDefault']();
            _0x177a89[_0x3f2e22(0xc0)]['display'] = _0x3f2e22(0x9d);
            _0x46ddd6['style'][_0x3f2e22(0x96)] = 'block';
        });
    }
    if (_0x4691a2) {
        _0x4691a2[_0x344276(0xb7)](_0x344276(0x7b), _0x34a146 => {
            const _0x155934 = _0x344276;
            _0x34a146[_0x155934(0xd9)]();
            _0x46ddd6['style'][_0x155934(0x96)] = _0x155934(0x9d);
            _0x177a89[_0x155934(0xc0)]['display'] = _0x155934(0x88);
        });
    }
    _0x2b4969[_0x344276(0x90)](_0x10bdc6 => {
        const _0xf0f07d = _0x344276;
        _0x10bdc6['addEventListener'](_0xf0f07d(0x7b), () => {
            const _0x87c3be = _0xf0f07d;
            _0x177a89[_0x87c3be(0xc0)][_0x87c3be(0x96)] = 'none';
            _0x46ddd6[_0x87c3be(0xc0)]['display'] = 'none';
        });
    });
    window[_0x344276(0xb7)](_0x344276(0x7b), _0x332b3e => {
        const _0x17bfb4 = _0x344276;
        if (_0x332b3e['target'] === _0x177a89)
            _0x177a89['style'][_0x17bfb4(0x96)] = _0x17bfb4(0x9d);
        if (_0x332b3e[_0x17bfb4(0xac)] === _0x46ddd6)
            _0x46ddd6['style'][_0x17bfb4(0x96)] = _0x17bfb4(0x9d);
    });
    const _0x147e03 = document['getElementById'](_0x344276(0xc5));
    if (_0x147e03) {
        _0x147e03[_0x344276(0xb7)](_0x344276(0xb2), async function (_0x4b1a75) {
            const _0x240111 = _0x344276;
            _0x4b1a75[_0x240111(0xd9)]();
            const _0x2a94d3 = document[_0x240111(0x81)]('button');
            const _0x258654 = _0x2a94d3[_0x240111(0x8a)];
            _0x2a94d3[_0x240111(0x97)] = !![];
            _0x2a94d3[_0x240111(0x8a)] = _0x240111(0xa7);
            try {
                await db[_0x240111(0x87)](_0x240111(0xce))['add']({
                    'name': _0x147e03[_0x240111(0xd8)]['value'],
                    'email': _0x147e03[_0x240111(0xa6)][_0x240111(0x8a)],
                    'message': _0x147e03[_0x240111(0xd3)][_0x240111(0x8a)],
                    'timestamp': firebase[_0x240111(0x9b)][_0x240111(0xb6)][_0x240111(0xcf)]()
                });
                await emailjs['sendForm']('default_service', _0x240111(0xbe), _0x147e03);
                showNotification('Message\x20envoyé\x20avec\x20succès\x20!');
                _0x147e03['reset']();
            } catch (_0x17297d) {
                console[_0x240111(0x8c)](_0x240111(0x82), _0x17297d);
                showNotification(_0x240111(0xcd), ![]);
            } finally {
                _0x2a94d3[_0x240111(0x97)] = ![];
                _0x2a94d3['value'] = _0x258654;
            }
        });
    }
    const _0x247688 = document[_0x344276(0x81)]('loginForm');
    if (_0x247688) {
        _0x247688['addEventListener'](_0x344276(0xb2), async function (_0x4ff7ea) {
            const _0xdd51d8 = _0x344276;
            _0x4ff7ea['preventDefault']();
            const _0x2f4f63 = _0x247688['loginEmail']['value'];
            const _0x527aa7 = _0x247688[_0xdd51d8(0xbf)][_0xdd51d8(0x8a)];
            try {
                await auth[_0xdd51d8(0x94)](_0x2f4f63, _0x527aa7);
                showNotification(_0xdd51d8(0xd0));
                _0x177a89[_0xdd51d8(0xc0)][_0xdd51d8(0x96)] = _0xdd51d8(0x9d);
                if (_0x5c45d7)
                    _0x5c45d7['textContent'] = 'Mon\x20compte';
            } catch (_0x5a9f60) {
                console['error']('Erreur\x20de\x20connexion:', _0x5a9f60);
                showNotification('Erreur:\x20' + _0x5a9f60[_0xdd51d8(0xd3)], ![]);
            }
        });
    }
    const _0x2c180f = document[_0x344276(0x81)](_0x344276(0xc6));
    if (_0x2c180f) {
        _0x2c180f['addEventListener'](_0x344276(0xb2), async function (_0x2dd7f0) {
            const _0x5afc20 = _0x344276;
            _0x2dd7f0[_0x5afc20(0xd9)]();
            const _0x2ef03d = _0x2c180f['registerName'][_0x5afc20(0x8a)];
            const _0x180123 = _0x2c180f['registerEmail'][_0x5afc20(0x8a)];
            const _0x1aa517 = _0x2c180f[_0x5afc20(0xbc)][_0x5afc20(0x8a)];
            const _0x16526c = _0x2c180f[_0x5afc20(0xd6)][_0x5afc20(0x8a)];
            if (_0x1aa517 !== _0x16526c) {
                showNotification(_0x5afc20(0x91), ![]);
                return;
            }
            try {
                const _0x4913a5 = await auth[_0x5afc20(0xd7)](_0x180123, _0x1aa517);
                await db[_0x5afc20(0x87)](_0x5afc20(0xb3))[_0x5afc20(0xe2)](_0x4913a5[_0x5afc20(0xca)]['uid'])[_0x5afc20(0xa5)]({
                    'name': _0x2ef03d,
                    'email': _0x180123,
                    'createdAt': firebase[_0x5afc20(0x9b)][_0x5afc20(0xb6)]['serverTimestamp'](),
                    'lastLogin': firebase[_0x5afc20(0x9b)][_0x5afc20(0xb6)][_0x5afc20(0xcf)]()
                });
                showNotification(_0x5afc20(0x89));
                _0x46ddd6[_0x5afc20(0xc0)]['display'] = _0x5afc20(0x9d);
                if (_0x5c45d7)
                    _0x5c45d7[_0x5afc20(0xb0)] = _0x5afc20(0xd2);
            } catch (_0x347d70) {
                console[_0x5afc20(0x8c)]('Erreur\x20d\x27inscription:', _0x347d70);
                showNotification(_0x5afc20(0xc7) + _0x347d70['message'], ![]);
            }
        });
    }
    auth[_0x344276(0xd1)](_0x556a35 => {
        const _0x592f50 = _0x344276;
        const _0x5f2776 = document[_0x592f50(0x81)](_0x592f50(0xdc));
        if (_0x5f2776) {
            _0x5f2776[_0x592f50(0xb0)] = _0x556a35 ? 'Mon\x20compte' : _0x592f50(0x83);
        }
        if (_0x556a35) {
            db[_0x592f50(0x87)](_0x592f50(0xb3))[_0x592f50(0xe2)](_0x556a35[_0x592f50(0x8d)])[_0x592f50(0xa8)]({ 'lastLogin': firebase[_0x592f50(0x9b)][_0x592f50(0xb6)][_0x592f50(0xcf)]() })[_0x592f50(0xd5)](_0x3220d7 => {
                const _0x47e399 = _0x592f50;
                console['error'](_0x47e399(0x93), _0x3220d7);
            });
        }
    });
    document['querySelectorAll'](_0x344276(0xc3))[_0x344276(0x90)](_0x36a294 => {
        const _0x4d2911 = _0x344276;
        _0x36a294[_0x4d2911(0xb7)](_0x4d2911(0x7b), function (_0x3f5a1c) {
            const _0x111304 = _0x4d2911;
            const _0x1068b1 = this['getAttribute'](_0x111304(0x92));
            if (_0x1068b1 !== '#' && _0x1068b1 !== '#!') {
                _0x3f5a1c['preventDefault']();
                const _0x2e9a89 = document[_0x111304(0xc4)](_0x1068b1);
                if (_0x2e9a89) {
                    _0x2e9a89[_0x111304(0xcb)]({
                        'behavior': _0x111304(0xc1),
                        'block': _0x111304(0xde)
                    });
                }
            }
        });
    });
    auth['onAuthStateChanged'](_0x952af1 => {
        const _0x4511d0 = _0x344276;
        if (_0x952af1) {
            console[_0x4511d0(0xb8)](_0x4511d0(0xbd), _0x952af1[_0x4511d0(0xa6)]);
        } else {
            console[_0x4511d0(0xb8)](_0x4511d0(0xc9));
        }
    }, _0x4347a8 => {
        console['error']('Erreur\x20d\x27authentification:', _0x4347a8);
    });
});
function checkAuth() {
    return new Promise(_0x804697 => {
        const _0x329c6f = _0x420e;
        const _0x53cdb9 = auth[_0x329c6f(0xd1)](_0x468347 => {
            _0x53cdb9();
            _0x804697(!!_0x468347);
        });
    });
}
function _0x2ea9() {
    const _0x1691c0 = [
        'Erreur\x20mise\x20à\x20jour\x20dernière\x20connexion:',
        'signInWithEmailAndPassword',
        'head',
        'display',
        'disabled',
        'className',
        'notification\x20',
        'location',
        'firestore',
        'div',
        'none',
        '8CMpwWi',
        'LDYR_83BF5t-wB9h2',
        'notification-styles',
        '5258300OnNuDH',
        'showNotification',
        'firebaseDB',
        '6CrrqGw',
        'set',
        'email',
        'Envoi\x20en\x20cours...',
        'update',
        'currentUser',
        '166720rmnEuM',
        '11QXncil',
        'target',
        'numeric',
        'login-ec53a.appspot.com',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#28a745;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-20px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.3s,\x20transform\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2012px\x20rgba(0,0,0,0.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.notification.error\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#dc3545;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'textContent',
        'removeChild',
        'submit',
        'users',
        'AIzaSyBzMi3F5vLM0bYxTY1KuBJf7eD6Nx96wsQ',
        'opacity',
        'FieldValue',
        'addEventListener',
        'log',
        'login-ec53a.firebaseapp.com',
        'createElement',
        '123644267529',
        'registerPassword',
        'Utilisateur\x20connecté:',
        'template_nu2qbqm',
        'loginPassword',
        'style',
        'smooth',
        '2ZgnySP',
        'a[href^=\x22#\x22]',
        'querySelector',
        'contactForm',
        'registerForm',
        'Erreur:\x20',
        'loginModal',
        'Utilisateur\x20non\x20connecté',
        'user',
        'scrollIntoView',
        '1350615jAAWXB',
        'Erreur\x20lors\x20de\x20l\x27envoi\x20du\x20message',
        'contacts',
        'serverTimestamp',
        'Connexion\x20réussie\x20!',
        'onAuthStateChanged',
        'Mon\x20compte',
        'message',
        '4085585WRhAdY',
        'catch',
        'registerConfirmPassword',
        'createUserWithEmailAndPassword',
        'name',
        'preventDefault',
        '2-digit',
        'initializeApp',
        'loginLink',
        '4217877wVsrmo',
        'start',
        'toDate',
        'transform',
        'appendChild',
        'doc',
        'checkAuth',
        'click',
        'translateY(0)',
        'DateTimeFormat',
        'DOMContentLoaded',
        'login-ec53a',
        '4649796OcwDgc',
        'getElementById',
        'Erreur:',
        'Connexion',
        '76MMqftt',
        'Date\x20non\x20disponible',
        'showLogin',
        'collection',
        'block',
        'Inscription\x20réussie\x20!',
        'value',
        'body',
        'error',
        'uid',
        '287873HraJkG',
        'fr-FR',
        'forEach',
        'Les\x20mots\x20de\x20passe\x20ne\x20correspondent\x20pas',
        'href'
    ];
    _0x2ea9 = function () {
        return _0x1691c0;
    };
    return _0x2ea9();
}
window['firebaseAuth'] = auth;
window[_0xf9edf1(0xa3)] = db;
window[_0xf9edf1(0xa2)] = showNotification;
window[_0xf9edf1(0xe3)] = checkAuth;
