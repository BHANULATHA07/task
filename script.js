// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const signupContainer = document.getElementById('signup-container');
    const loginContainer = document.getElementById('login-container');

    const showLoginLink = document.getElementById('show-login');
    const showSignupLink = document.getElementById('show-signup');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    
    function toggleForm(target) {
        if (target === 'login') {
            signupContainer.style.display = 'none';
            loginContainer.style.display = 'flex';
        } else {
            signupContainer.style.display = 'flex';
            loginContainer.style.display = 'none';
        }
    }

    // Event listener for showing login form
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForm('login');
    });

    // Event listener for showing signup form
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForm('signup');
    });

    //Basic email validation
     
    function validateEmail(email) {
        // Simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /**
     * Basic password validation
     * @param {string} password
     * @returns {boolean}
     */
    function validatePassword(password) {
        // Password should be at least 6 characters
        return password.length >= 6;
    }

    // Handle Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();

        // Basic validations
        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Password should be at least 6 characters.');
            return;
        }

        alert('Signup successful!');

        // Optionally, switch to login form after signup
        toggleForm('login');
        // Reset signup form
        signupForm.reset();
    });

    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Basic validations
        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Password should be at least 6 characters.');
            return;
        }

        
        alert('Login successful!');
      
        loginForm.reset();
    });
});
