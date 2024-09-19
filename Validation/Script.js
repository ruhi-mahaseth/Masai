// Function to validate the name field
function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

// Function to validate the email field
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

// Function to validate the password field
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

// Add event listeners to validate the input fields in real-time
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('password').addEventListener('blur', validatePassword);

// Add event listener to the form to prevent submission if there are validation errors
document.getElementById('myForm').addEventListener('submit', function(event) {
    validateName();
    validateEmail();
    validatePassword();

    if (document.querySelectorAll('.error:visible').length > 0) {
        event.preventDefault();
    }
});
