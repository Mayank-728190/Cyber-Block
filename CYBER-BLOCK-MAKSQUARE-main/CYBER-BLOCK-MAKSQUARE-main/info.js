// Function to toggle the visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    alert('Current Date and Time: ' + dateTimeString);
}

// Function to handle form submission with AJAX
function handleSubmitWithAjax(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('submit-form.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });
}

// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Helper function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners or call functions as needed
document.getElementById('toggleElementButton').addEventListener('click', () => {
    toggleVisibility('elementToToggle');
});

document.getElementById('displayDateTimeButton').addEventListener('click', () => {
    displayDateTime();
});

document.getElementById('submitButton').addEventListener('click', handleSubmitWithAjax);

document.getElementById('changeColorButton').addEventListener('click', () => {
    changeBackgroundColor();
});

// Function to show/hide password
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show Password';
    }
}

// Function to handle form validation
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    }

    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        return false;
    }

    return true;
}

// Function to handle form submission
function submitForm() {
    if (validateForm()) {
        // Code to submit form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log('Form data:', formData);
        alert('Form submitted successfully!');
    }
}

// Function to validate email address
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Function to scroll to top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listeners or call functions as needed
document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
document.getElementById('submitButton').addEventListener('click', submitForm);
document.getElementById('scrollTopButton').addEventListener('click', scrollToTop);