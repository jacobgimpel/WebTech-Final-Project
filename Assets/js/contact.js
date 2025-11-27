document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let valid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name cannot be empty.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "") {
            emailError.textContent = "Email cannot be empty.";
            valid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Please enter a valid email.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            valid = false;
        } else {
            messageError.textContent = "";
        }

        if (valid) {
            responseDiv.textContent = "Message sent!";
            form.reset();
        } else {
            responseDiv.textContent = "";
        }
    });
});

