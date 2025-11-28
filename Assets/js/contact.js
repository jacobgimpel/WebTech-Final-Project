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

        const nameValue = nameInput.value.trim();
        const namePattern = /^[a-zA-Z\s-]{1,50}$/;
        if (nameValue === ""){
            nameError.innerText = "Please enter a name.";
            valid = false;
        } else if (!namePattern.test(nameValue)) {
            nameError.textContent = "The name must more than 1 character";
            valid = false;
        } else {
            nameError.textContent = ""
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

        const messageContent = messageInput.value.trim();
        const messagePattern = /^.{10,}$/;

        if (messageContent === ""){
            messageError.textContent = "The message field cannot be empty."
            valid = false;
        } else if (!messagePattern.test(messageContent)) {
            messageError.textContent = "The message must be at least 10 characters long."
            valid = false;
        } else{
            messageError.textContent = ""
        }

        if (valid) {
            responseDiv.textContent = "Message sent!";
            form.reset();
        } else {
            responseDiv.textContent = "";
        }
    });
});

