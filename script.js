const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'password123';

const showError = (message) => {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
};

const hideError = () => {
    errorMessage.style.display = 'none';
};

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    hideError();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        showError('Please enter both username and password.');
        return;
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        alert('Login Successful! Redirecting...');
        
        const submitButton = document.querySelector('.submit-button');
        submitButton.textContent = 'Success!';
        submitButton.style.backgroundColor = '#28a745';
        submitButton.disabled = true;

    } else {
        showError('Incorrect username or password. Please try again.');
        passwordInput.value = '';
    }
});

usernameInput.addEventListener('keyup', hideError);
passwordInput.addEventListener('keyup', hideError);