// Function to dynamically populate the completion year dropdown
function populateCompletionYear() {
    const currentYear = new Date().getFullYear();
    const select = document.getElementById('completion-year');
    
    // Create options from current year - 100 to current year + 6
    for (let year = currentYear - 20; year <= currentYear + 6; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
}

function validateForm() {
    let isValid = true;

    // Select all required input and select elements
    const requiredFields = document.querySelectorAll('.input-box input[required], .input-box select[required]');

    // Loop through each field to check if it is valid
    requiredFields.forEach(field => {
        if (field.value.trim() === "") {
            // If the field is empty, remove the 'valid' class and mark the form as invalid
            field.classList.remove('valid');
            isValid = false;
            alert(`The field "${field.placeholder || field.id}" isn't filled. Please fill out this field.`);
            field.focus();
            return false; // Break out of the loop if any field is invalid
        }
    });

    // If the form is valid, return true to allow submission
    return isValid;
}

function showPasswordRequirements() {
    document.getElementById('password-requirements').style.display = 'block';
}

function hidePasswordRequirements() {
    document.getElementById('password-requirements').style.display = 'none';
}

function showConfirmPasswordRequirements() {
    document.getElementById('confirm-password-requirements').style.display = 'block';
}

function hideConfirmPasswordRequirements() {
    document.getElementById('confirm-password-requirements').style.display = 'none';
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const special = document.getElementById('special');
    const passwordInput = document.getElementById('password');
    const checkmark = document.getElementById('password-checkmark');

    // Check length
    if (password.length >= 8 && password.length <= 16) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
    }

    // Check for uppercase
    if (/[A-Z]/.test(password)) {
        uppercase.classList.remove('invalid');
        uppercase.classList.add('valid');
    } else {
        uppercase.classList.remove('valid');
        uppercase.classList.add('invalid');
    }

    // Check for lowercase
    if (/[a-z]/.test(password)) {
        lowercase.classList.remove('invalid');
        lowercase.classList.add('valid');
    } else {
        lowercase.classList.remove('valid');
        lowercase.classList.add('invalid');
    }

    // Check for special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        special.classList.remove('invalid');
        special.classList.add('valid');
    } else {
        special.classList.remove('valid');
        special.classList.add('invalid');
    }

    // Check if all conditions are satisfied
    if (length.classList.contains('valid') &&
        uppercase.classList.contains('valid') &&
        lowercase.classList.contains('valid') &&
        special.classList.contains('valid')) {
        passwordInput.classList.add('valid');
        checkmark.style.display = 'block'; // Show checkmark
    } else {
        passwordInput.classList.remove('valid');
        checkmark.style.display = 'none'; // Hide checkmark
    }

    validateConfirmPassword(); // Ensure confirm password is validated against new criteria
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const confirmCheckmark = document.getElementById('confirm-password-checkmark');
    const match = document.getElementById('match');
    const confirmPasswordInput = document.getElementById('confirm_password');

    if (password === confirmPassword && confirmPassword.length > 0) {
        match.classList.add('valid');
        match.classList.remove('invalid');
        confirmPasswordInput.classList.add('valid');
        confirmCheckmark.style.display = 'block'; // Show checkmark
    } else {
        match.classList.remove('valid');
        match.classList.add('invalid');
        confirmPasswordInput.classList.remove('valid');
        confirmCheckmark.style.display = 'none'; // Hide checkmark
    }
}

function togglePassword(inputId, showIconId, hideIconId) {
    const input = document.getElementById(inputId);
    const showIcon = document.getElementById(showIconId);
    const hideIcon = document.getElementById(hideIconId);

    if (input.type === 'password') {
        input.type = "text";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
    } else {
        input.type = "password";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    }
}

function validateGmail() {
    const gmailInput = document.getElementById('gmail');
    const gmailCheckmark = document.getElementById('gmail-checkmark');
    const gmailPattern = /^[a-zA-Z0-9]+@gmail.com$/;

    if (gmailPattern.test(gmailInput.value)) {
        gmailInput.classList.add('valid');
        gmailCheckmark.style.display = 'block'; // Show checkmark
    } else {
        gmailInput.classList.remove('valid');
        gmailCheckmark.style.display = 'none'; // Hide checkmark
    }
}

function validateNonEmpty(input) {
    if (input.value.trim() !== "") {
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
    }
}

// Initialize the page by populating the completion year dropdown
window.onload = populateCompletionYear;