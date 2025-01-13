document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('applicationForm');
    const firstName = document.getElementById('firstName');
    const middleInitial = document.getElementById('middleInitial');
    const lastName = document.getElementById('lastName');
    const matriculationNumber = document.getElementById('matriculationNumber');
    const semester = document.getElementById('semester');
    const country = document.getElementById('country');
    const program = document.getElementById('program');
    const startDate = document.getElementById('startDate');
    const email = document.getElementById('email');
    const feedback = document.getElementById('feedback');
  
    // Validation for first, middle initial, last name (only alphabetic characters)
    firstName.addEventListener('input', function () {
      validateTextField(firstName);
    });
  
    middleInitial.addEventListener('input', function () {
      validateTextField(middleInitial);
    });
  
    lastName.addEventListener('input', function () {
      validateTextField(lastName);
    });
  
    // Validation for matriculation number (only alphanumeric characters)
    matriculationNumber.addEventListener('input', function () {
      validateMatriculationNumber(matriculationNumber);
    });
  
    // Validate email format
    email.addEventListener('input', function () {
      validateEmail(email);
    });
  
    // Validate feedback field (not empty)
    feedback.addEventListener('input', function () {
      validateFeedback(feedback);
    });
  
    // Form submit event
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission until validation is done
  
      // Perform final validation check
      if (validateForm()) {
        alert("Form submitted successfully!");
        // Form submission code here (e.g., send data to the server)
        form.reset(); // Reset form after successful submission
      } else {
        alert("Please fill in all fields correctly.");
      }
    });
  
    // Validate text fields (first, middle, and last names)
    function validateTextField(input) {
      const regex = /^[A-Za-z ]+$/;
      if (!regex.test(input.value)) {
        input.setCustomValidity("Only alphabetic characters and spaces are allowed.");
      } else {
        input.setCustomValidity("");
      }
    }
  
    // Validate matriculation number (alphanumeric)
    function validateMatriculationNumber(input) {
      const regex = /^[A-Za-z0-9]+$/;
      if (!regex.test(input.value)) {
        input.setCustomValidity("Matriculation number can only contain letters and digits.");
      } else {
        input.setCustomValidity("");
      }
    }
  
    // Validate email format
    function validateEmail(input) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!regex.test(input.value)) {
        input.setCustomValidity("Please enter a valid email address.");
      } else {
        input.setCustomValidity("");
      }
    }
  
    // Validate feedback (not empty)
    function validateFeedback(input) {
      if (input.value.trim() === "") {
        input.setCustomValidity("Please provide feedback.");
      } else {
        input.setCustomValidity("");
      }
    }
  
    // Final form validation (ensuring all required fields are filled and valid)
    function validateForm() {
      let isValid = true;
  
      // Check for empty required fields
      if (!firstName.value || !lastName.value || !matriculationNumber.value || !semester.value || !country.value || !program.value || !startDate.value || !email.value || !feedback.value) {
        isValid = false;
      }
  
      // Ensure form fields are individually validated
      if (!firstName.checkValidity() || !lastName.checkValidity() || !matriculationNumber.checkValidity() || !email.checkValidity() || !feedback.checkValidity()) {
        isValid = false;
      }
  
      return isValid;
    }
  });
  