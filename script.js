document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  
  // Form Submission and Event Prevention
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    //Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Logic
    let isValid = true;
    const messages = [];

    //Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 charaters long.");
    }

    //Email validation
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      messages.push("Email must contain both '@' and '.'.");
    }

    //Password Validation
    if (!(password.length >= 8)) {
      isValid = false;
      messages.push("Password must have at least 8 character");
    }
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    }

    if (!isValid) {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});