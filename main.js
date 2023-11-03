const eyeButton = document.querySelector('.visibility');
const onClass = 'on';

eyeButton.addEventListener('click', () => {
    const inputPassword = document.querySelector('[name="password"]');
    if (eyeButton.classList.contains(onClass)) {
        // change the input type to password
        inputPassword.type = 'password';
    } else {
        // change the input type to text
        inputPassword.type = 'text';
    }
    eyeButton.classList.toggle(onClass);
});

const buttonForgotPassword = document.querySelector('#forgot-password');
const formClass = 'forgot-my-password';
const formContainer = document.querySelector('.login-form-container');

buttonForgotPassword.addEventListener('click', () => {
    formContainer.classList.add(formClass);
});

const backForm = document.querySelector('#back');

backForm.addEventListener('click', () => {
    formContainer.classList.remove(formClass);
});