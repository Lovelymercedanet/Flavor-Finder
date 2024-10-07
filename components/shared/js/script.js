'use strict';

// Переключение режима отображения пароля Login
function showPasswordLogin() {
    const passwordInputText = document.getElementById('passwordLoginInput');
    const imgElement = document.getElementById('toggleImgLogin');

    if (passwordInputText.type === 'password') {
        passwordInputText.type = 'text';
    } else {
        passwordInputText.type = 'password';
    }

    imgElement.classList.add('input-field__toggle-password-hidden');
    imgElement.classList.remove('input-field__toggle-password-visible');

    setTimeout(() => {
        const currentSrc = imgElement.getAttribute('src');

        if (currentSrc === '../../../svg/toggle-show-password.svg') {
            imgElement.setAttribute('src', '../../../svg/toggle-show-password-active.svg');
        } else {
            imgElement.setAttribute('src', '../../../svg/toggle-show-password.svg');
        }

        imgElement.classList.remove('input-field__toggle-password-hidden');
        imgElement.classList.add('input-field__toggle-password-visible');
    }, 300);
};

// Переключение режима отображения пароля Register
function showPasswordRegister() {
    const passwordInputText = document.getElementById('passwordRegisterInput');
    const imgElement = document.getElementById('toggleImgRegister');

    if (passwordInputText.type === 'password') {
        passwordInputText.type = 'text';
    } else {
        passwordInputText.type = 'password';
    }

    imgElement.classList.add('input-field__toggle-password-hidden');
    imgElement.classList.remove('input-field__toggle-password-visible');

    setTimeout(() => {
        const currentSrc = imgElement.getAttribute('src');

        if (currentSrc === '../../../svg/toggle-show-password.svg') {
            imgElement.setAttribute('src', '../../../svg/toggle-show-password-active.svg');
        } else {
            imgElement.setAttribute('src', '../../../svg/toggle-show-password.svg');
        }

        imgElement.classList.remove('input-field__toggle-password-hidden');
        imgElement.classList.add('input-field__toggle-password-visible');
    }, 300);
};

// Переключение с логина на регистрацию
const registerBtn = document.querySelector('.login-page__log-switch-btns__item-register');
const loginBtn = document.querySelector('.login-page__log-switch-btns__item-login');
const registerWindow = document.querySelector('#register-window');
const loginWindow = document.querySelector('#login-window');

function toRegisterSwitch() {
    loginBtn.classList.remove('login-page__log-switch-btns__item-active');
    loginBtn.classList.add('login-page__log-switch-btns__item-inactive');
    registerBtn.classList.add('login-page__log-switch-btns__item-active-register');
    registerBtn.classList.remove('login-page__log-switch-btns__item-inactive');

    registerWindow.classList.remove('register-page__register-inner-hidden');
    registerWindow.classList.add('register-page__register-inner');

    loginWindow.classList.add('login-page__login-inner-hidden');
    loginWindow.classList.remove('login-page__login-inner');
}

function toLoginSwitch() {
    loginBtn.classList.remove('login-page__log-switch-btns__item-inactive');
    loginBtn.classList.add('login-page__log-switch-btns__item-active');
    registerBtn.classList.add('login-page__log-switch-btns__item-inactive');
    registerBtn.classList.remove('login-page__log-switch-btns__item-active-register');

    registerWindow.classList.add('register-page__register-inner-hidden');
    registerWindow.classList.remove('register-page__register-inner');

    loginWindow.classList.remove('login-page__login-inner-hidden');
    loginWindow.classList.add('login-page__login-inner');
}

// Hover эффект для кнопки логина через Facebook
const loginFbContainer = document.querySelector('.extra-login-container');
loginFbContainer.addEventListener('mouseover', function () {
    const loginFbText = document.querySelector('.extra-login-container-item');
    loginFbText.classList.add('extra-login-container-item-hover');
})
loginFbContainer.addEventListener('mouseout', function () {
    const loginFbText = document.querySelector('.extra-login-container-item');
    loginFbText.classList.remove('extra-login-container-item-hover');
})

// Разрешить ввод только латиницы, цифр и необходимого для email в поле ввода логина
document.getElementById('usernameLoginInput').addEventListener('input', function (event) {
    const allowedRegEx = /^[a-zA-Z0-9._@-]*$/;
    if (!allowedRegEx.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9._@-]/g, '');
    }
})

// Разрешить ввод только латиницы, цифр в поле ввода пароля
document.getElementById('passwordLoginInput').addEventListener('input', function (event) {
    const allowedRegEx = /^[A-Za-z0-9]*$/;
    if (!allowedRegEx.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^A-Za-z0-9]/g, '');
    }
});

// Обработка возвращения текста к нормальному состоянию при очищении input при логине (Login)
const inputLogin = document.querySelector('#usernameLoginInput');
inputLogin.addEventListener('input', function () {
    const previewTextLogin = document.querySelector('#input__preview-text-login-id');
    if (inputLogin.value === '') {
        previewTextLogin.innerText = 'Username or Email';
        previewTextLogin.classList.remove('input__preview-text--wrong')
        previewTextLogin.classList.remove('input__preview-text--forgot')
    } else {
        return
    }
});

// Обработка возвращения текста к нормальному состоянию при очищении input при логине (Register)
const registerInput = document.querySelector('#usernameRegisterInput');
registerInput.addEventListener('input', function () {
    const previewTextRegister = document.querySelector('#input__preview-text-register-id');
    if (registerInput.value === '') {
        previewTextRegister.innerText = 'Username or Email';
        previewTextRegister.classList.remove('input__preview-text--wrong')
        previewTextRegister.classList.remove('input__preview-text--forgot')
    }
});

// Обработка возвращения текста к нормальному состоянию при очищении input при вводе пароля (Register)
const inputPasswordRegister = document.querySelector('#passwordRegisterInput');
inputPasswordRegister.addEventListener('input', function () {
    const previewTextPassword = document.querySelector('#input__preview-text-password-register-id');
    if (inputPasswordRegister.value === '') {
        previewTextPassword.innerText = 'Password';
        previewTextPassword.classList.remove('input__preview-text--wrong');
    }
});

// Обработка возвращения текста к нормальному состоянию при очищении input при вводе пароля (Login)
const inputPassword = document.querySelector('#passwordLoginInput');
inputPassword.addEventListener('input', function () {
    const previewTextPassword = document.querySelector('#input__preview-text-password-login-id');
    if (inputPassword.value === '') {
        previewTextPassword.innerText = 'Password';
        previewTextPassword.classList.remove('input__preview-text--wrong');
    } else {
        return
    }
});

// Обработка Forgot Password
function forgotPasswordClick() {
    const previewTextLogin = document.querySelector('#input__preview-text-login-id');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputLogin.value === '' && !previewTextLogin.classList.contains('input__preview-text--forgot')) {
        previewTextLogin.innerText = previewTextLogin.innerText + ' - This field is required';
        previewTextLogin.classList.add('input__preview-text--forgot');
    } else if (emailPattern.test(inputLogin.value)) {
        const pEl = document.querySelector('.restore-password-panel-text');
        pEl.innerText = `We sent instructions to change your password to ${inputLogin.value}, please check both your inbox and spam folder.`;
        const pDiv = document.querySelector('#restore-password-panel-container-id');
        pDiv.classList.remove('restore-password-panel-container-hidden')
        pDiv.classList.add('restore-password-panel-container');
        const overlayBehind = document.querySelector('.overlay');
        overlayBehind.style.display = 'block';
    } else if (!emailPattern.test(inputLogin.value) && !previewTextLogin.classList.contains('input__preview-text--forgot')) {
        if (!previewTextLogin.classList.contains('input__preview-text--wrong')) {
            previewTextLogin.innerText = previewTextLogin.innerText + ' - Enter your email';
            previewTextLogin.classList.add('input__preview-text--forgot');
        }
    }
};

// Обработка кнопки 'Okay' в панели инструкции о восстановлении пароля
function closePassForgBtn() {
    const pDiv = document.querySelector('#restore-password-panel-container-id');
    pDiv.classList.remove('restore-password-panel-container');
    pDiv.classList.add('restore-password-panel-container-hidden')
    const overlayBehind = document.querySelector('.overlay');
    overlayBehind.style.display = 'none';
}

// Обработка submit при логине
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const textInitial = document.querySelectorAll('.input__preview-text');
    const textInitialRegister = document.querySelector('#input__preview-text-register-id');
    textInitial.forEach((el, index) => {
        if (index !== 1) {
            if (!el.classList.contains('input__preview-text--wrong')) {
                if (!el.classList.contains('input__preview-text--forgot')) {
                    el.innerText = el.innerText + ' - Login or password is invalid';
                    el.classList.add('input__preview-text--wrong');
                }
            }
        }
    });
    textInitialRegister.innerText = 'Username or Email';
    textInitialRegister.classList.remove('input__preview-text--wrong');
});

// Обработка submit при регистрации
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const textInitialUsername = document.querySelector('#input__preview-text-register-id');
    const textInitialPassword = document.querySelector('#input__preview-text-password-register-id');

    textInitialUsername.innerText = textInitialUsername.innerText + ' - This login has been taken';
    textInitialUsername.classList.add('input__preview-text--wrong');

    textInitialPassword.innerText = textInitialPassword.innerText + ' - This login has been taken';
    textInitialPassword.classList.add('input__preview-text--wrong');
})

// Login with facebook button
function loginWithFacebook() {
    const fbLoginPanel = document.querySelector('#fb-login-container-id');
    const overlayBehind = document.querySelector('.overlay');

    fbLoginPanel.classList.remove('fb-login-container-hidden');
    fbLoginPanel.classList.add('fb-login-container');
    overlayBehind.style.display = 'block';

    setTimeout(() => {
        document.addEventListener('click', function handleClickOutside(event) {
            if (!fbLoginPanel.contains(event.target) && !event.target.closest('#fb-login-btn')) {
                fbLoginPanel.classList.add('fb-login-container-hidden');
                fbLoginPanel.classList.remove('fb-login-container');
                overlayBehind.style.display = 'none';

                document.removeEventListener('click', handleClickOutside);
            }
        })
    }, 100)
};

// Открыть окно Terms and Conditions нажатием на Terms and Conditions & Privacy Policy
function openTermsAndConditionsPanel() {
    const panelContainer = document.querySelector('#terms-and-conditions-container-id');
    const overlayBehind = document.querySelector('.overlay');

    panelContainer.classList.add('terms-and-conditions-container');
    panelContainer.classList.remove('terms-and-conditions-container-hidden');
    overlayBehind.style.display = 'block';
};

// Скрыть окно Terms And Conditions нажатием на кнопку I understand
function closeTermsAndConditionsPanel() {
    const panelContainer = document.querySelector('#terms-and-conditions-container-id');
    const overlayBehind = document.querySelector('.overlay');

    panelContainer.classList.add('terms-and-conditions-container-hidden');
    panelContainer.classList.remove('terms-and-conditions-container');
    overlayBehind.style.display = 'none';
};

// Отправка submit логин (Сделал простую функцию отслеживания и получения "отправленных" данных логина из формы)
// Это для того, что если бы данные проходили изначальную валидацию, мы бы понимали, что они могут отправится на сервер в корректном виде
function submitLogin(form) {
    const username = form.usernameLogin.value;
    const password = form.passwordLogin.value;
    console.log(`data: login: ${username}, password: ${password}`);
    return true
}