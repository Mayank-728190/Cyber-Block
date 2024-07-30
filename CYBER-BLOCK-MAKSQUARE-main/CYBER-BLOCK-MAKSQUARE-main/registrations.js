// Function to show the user details form
function showUserDetailsForm() {
    document.getElementById('dateTimeSelection').classList.add('hidden');
    document.getElementById('userDetailsForm').classList.remove('hidden');
    
    // Adjust image size
    document.getElementById('image').classList.add('h-64', 'w-auto');
}

// Event listener for the confirm date and time button
document.getElementById('confirmDateTimeBtn').addEventListener('click', function () {
    showUserDetailsForm();
});

// Event listener for the form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the selected date and time
    const selectedDate = document.getElementById('workshopDate').value;
    const selectedTime = document.getElementById('workshopTime').value;

    // Get user details
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // You can perform further actions here, like submitting the form data to a server

    // For demonstration purposes, let's log the data
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Additional Message:', message);

    // Reset the form
    document.getElementById('registrationForm').reset();

    // Display success message
    document.getElementById('successMessage').classList.remove('hidden');
});