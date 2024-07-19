document.addEventListener("DOMContentLoaded",function() {
    console.log("DOM fully loaded and parsed");

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form submission prevented for validation');

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        console.log("username");
        console.log("email");
        console.log("password");

        let isValid = true
        const messages = [];

        //Username validation
        if (username.length<3) {
            isValid = false;
            messages.push("Username length must be atleast three characters and above.");
            console.log("Username validation failed");
        }
        else{
            console.log("Username validation passed");
        }

        //Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Password must be atleast 8 characters long.");
            
            console.log("Email validation failed");

        } else{
            console.log("Email validation passed")
        }

        //Password validation
        if (password.length <8) {
            isValid = false;
            messages.push("Password length must be atleast 8 characters long.");  
            console.log("Password validation failed");
        } else{
            console.log("password validation passed");
        }

        //Validation logic
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            console.log("Form validation successful");
        }
        else {
            feedbackDiv.innerHtml = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            console.log("Form validation failed");
        }




    });

    
});