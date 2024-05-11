document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("emailInput");
    var message = document.getElementById("message");

    if (validateEmail(emailInput.value)) {
        message.textContent = "Valid email address! Thank you for subscribing.";
        message.style.color = "green";
        emailInput.value = "";
        message.classList.add("success-animation");
        setTimeout(function() {
            message.classList.remove("success-animation");
        }, 2000); // Remove animation class after 2 seconds
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
