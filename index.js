function validateForm() {
    // Get form inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var dobInput = document.getElementById('dob');

    // Validate Date of Birth
    var dobValue = new Date(dobInput.value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobValue.getFullYear();

    if (age < 18 || age > 55) {
        alert('Please enter a valid date of birth between ages 18 and 55.');
        return false; // Prevent form submission
    }

    // You can add additional validations for name, email, and password as needed

    // If all validations pass, continue with form submission
    return true;
}
