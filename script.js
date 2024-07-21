document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        //Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username length must be atleast three characters and above.');
        }
            
        //Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain "@" and "." characters.');
        }

        //Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password length must be atleast 8 characters long.');
        }

        //Validation logic
        feedbackDiv.style.display = "block"; 
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            
        } else {
            feedbackDiv.innerHtml = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            
        }
    });
});