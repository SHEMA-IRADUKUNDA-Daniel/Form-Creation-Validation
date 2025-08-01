document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedBackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (name.length < 3) {
      isValid = false;
      messages.push("Name must be at least 3 characters long.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must be a valid email address.");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    feedBackDiv.style.display = "block";

    if (isValid) {
      feedBackDiv.textContent = "Registration successful!";
      feedBack.style.color = "#28a745";
    } else {
      feedBackDiv.innerHTML = messages.join("<br>");
      feedBackDiv.style.color = "#dc3545";
    }
  });
});
