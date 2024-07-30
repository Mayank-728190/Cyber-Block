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

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessages();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // Validate username and password
    let isValid = true;
    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        isValid = false;
    }
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        isValid = false;
    }
    if (isValid) {
        // Simulate login process
        if (username === "admin" && password === "password") {
            showSuccessMessage();
            setTimeout(redirectToDashboard, 1500);
        } else {
            showErrorMessage();
        }
    }
});

function clearMessages() {
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("loginSuccessMessage").style.display = "none";
    document.getElementById("loginErrorMessage").style.display = "none";
}

function showSuccessMessage() {
    document.getElementById("loginSuccessMessage").style.display = "block";
}

function showErrorMessage() {
    document.getElementById("loginErrorMessage").style.display = "block";
}

function redirectToDashboard() {
    window.location.href = "dashboard.html";
}