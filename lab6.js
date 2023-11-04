function validateForm() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let postcode = document.getElementById("postcode").value;
    
    let emailPattern = /^[a-zA-Z0-9._-]+@pnu\.edu\.ua$/;
    let namePattern = /^[A-Z][a-z]+ [A-Z][a-zA-Z]+$/;
    let loginPattern = /^[a-zA-Z]+$/;
    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-_!@#$%^&*])[A-Za-z\d-_!@#$%^&*]{8,}$/;
    let postcodePattern = /^\d{5}$/;

    let isValid = true;

    let validateField = function(field, pattern, iconId) {
        let fieldElement = document.getElementById(field);
        let fieldError = document.getElementById(field + "Error");
        let fieldIcon = document.getElementById(iconId);

        if (!pattern.test(fieldElement.value)) {
            fieldElement.classList.add("error");
            fieldElement.classList.remove("success");
            fieldError.innerText = "Невірний формат";
            fieldIcon.style.display = "none";
            isValid = false;
        } else {
            fieldElement.classList.add("success");
            fieldElement.classList.remove("error");
            fieldError.innerText = "";
            fieldIcon.style.display = "inline";
        }
    };

    validateField("email", emailPattern, "emailIcon");
    validateField("name", namePattern, "nameIcon");
    validateField("login", loginPattern, "loginIcon");
    validateField("password", passwordPattern, "passwordIcon");
    validateField("postcode", postcodePattern, "postcodeIcon");

    return isValid;
}
