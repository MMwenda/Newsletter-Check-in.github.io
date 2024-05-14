var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");

function validateEmail() {
    // emailError.style.borderBlockColor = "red";

    if(!emailField.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
    
    emailError.innerHTML = "Please enter valid email";
    emailField.style.borderColor = "#EE4B2B";
    emailLabel.style.color = "#EE4B2B";
    return false;
    }

    emailError.innerHTML = "";
    emailField.style.borderColor = "#AAFF00";
    emailLabel.style.color = "black";
    return true
}