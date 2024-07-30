function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.getElementById('passwordToggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.className = 'fa fa-fw fa-eye toggle-password';
    } else {
        passwordInput.type = 'password';
        passwordToggle.className = 'fa fa-fw fa-eye-slash toggle-password';
    }
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessages();
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    // Validate inputs
    let isValid = true;
    if (fullname.trim() === "") {
        document.getElementById("fullnameError").innerText = "Full Name is required";
        isValid = false;
    }
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        isValid = false;
    }
    if (confirmPassword.trim() === "") {
        document.getElementById("confirmPasswordError").innerText = "Please confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }
    if (isValid) {
        // Simulate signup process
        // You can add your signup logic here
        showSuccessMessage();
    }
});

function clearMessages() {
    document.getElementById("fullnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("signupSuccessMessage").style.display = "none";
    document.getElementById("signupErrorMessage").style.display = "none";
}

function showSuccessMessage() {
    document.getElementById("signupSuccessMessage").style.display = "block";
}

function showErrorMesssage() {
    document.getElementById("signupErrorMessage").style.display = "block";
}

function isValidEmail(email) {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}