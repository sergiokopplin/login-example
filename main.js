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