
const modal = document.querySelector('.js-modal');
const fromRegister = document.querySelector('.js__auth-form--register');
const fromLogin = document.querySelector('.js__auth-form--login');
const registers = document.querySelectorAll('.js__from--register');
const logins = document.querySelectorAll('.js__from--login');

function ShowFromRegister() {
    modal.classList.remove('hide-modal');
    fromRegister.classList.remove('hide-modal');
}

function ShowFromLogin() {
    modal.classList.remove('hide-modal');
    fromLogin.classList.remove('hide-modal');
}


for (const register of registers) {
    register.addEventListener('click', ShowFromRegister);
}

for (const login of logins) {
    login.addEventListener('click', ShowFromLogin);
}

//  Register to login 

function RegisterToLogin() {
    fromRegister.classList.add('hide-modal');
    fromLogin.classList.remove('hide-modal');
}

const loginInRegister = document.querySelectorAll('.js__login');

for (const item of loginInRegister) {
    item.addEventListener('click', RegisterToLogin);
}


// Login to register

function LoginToRegister() {
    fromRegister.classList.remove('hide-modal');
    fromLogin.classList.add('hide-modal');
}

const registerInLogin = document.querySelectorAll('.js__register');

for (const item of registerInLogin) {
    item.addEventListener('click', LoginToRegister);
}

// Close modal

const modalClose = document.querySelectorAll('.js-close-modal');

function HideModal() {
    modal.classList.add('hide-modal');
    fromLogin.classList.add('hide-modal');
    fromRegister.classList.add('hide-modal');
}

const modalBody = document.querySelector('.js-modal--body')

for (const item of modalClose) {
    item.addEventListener('click', HideModal);
}

modal.addEventListener('click', HideModal);

modalBody.addEventListener('click', function(evnet) {
    evnet.stopPropagation();
});

