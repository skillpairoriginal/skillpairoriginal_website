document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById("LoginButton");

    submitBtn.addEventListener('click', function() {
        console.log("Button Input: true");
        createAccount();
    });

    function createAccount() {
        var passwordInput = document.getElementById("InputPasswordCreate").value;
        var repeatPasswordInput = document.getElementById("repeatPasswordCreate");
        var repeatPassword = repeatPasswordInput.value;        
        var errorMessageElement = document.getElementById("errorMessage");

        var checkForInput = document.getElementsByClassName("LoginInput");
        var input = []

        for(var x = 0; x < 4; x++){
            input.push(checkForInput[x].value);
            console.log(input)

            if (input[x] == ""){
                var err = "You have to fill avery Input field";
                errorMessageElement.innerHTML = err;
                errorMessageElement.style.display ="block";
                return false;
            }
        }

        // Check if the password length is at least 8 characters
        if (passwordInput.length < 8) {
            var err = "The Password needs at least 8 characters";
            errorMessageElement.innerHTML = err;
            errorMessageElement.style.display = "block";
            return false;
        }

        // Check if the password contains at least one uppercase letter
        if (!/[A-Z]/.test(passwordInput)) {
            var err = "The Password needs at least one uppercase letter";
            errorMessageElement.innerHTML = err;
            errorMessageElement.style.display = "block";
            return false;
        }

        // Check if the password contains at least one special character
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(passwordInput)) {
            var err = "The Password needs at least one special character";
            errorMessageElement.innerHTML = err;
            errorMessageElement.style.display = "block";
            return false;
        }

        // Check if the password matches the repeated password
        if (passwordInput !== repeatPassword) {
            var err = "Your password does not match";
            errorMessageElement.innerHTML = err;
            errorMessageElement.style.display = "block";
            
            // Clear the repeat password input
            repeatPasswordInput.value = "";
            
            return false;
        }

        // If all checks pass, reset the error message
        errorMessageElement.innerHTML = "";
        errorMessageElement.style.display = "none";
    }
});
