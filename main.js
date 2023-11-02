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

const forgotPassword = document.querySelector('#forgot-password');
const formShow = 'forgot-my-password';
const formType = document.querySelector('.login-form-container');

forgotPassword.addEventListener('click', () => {
    formType.classList.add(formShow);
});

const backForm = document.querySelector('#back');

backForm.addEventListener('click', () => {
    formType.classList.remove(formShow);
});