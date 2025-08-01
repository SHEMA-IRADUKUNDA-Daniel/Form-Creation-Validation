document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedBack = document.getElementById("form-feedback");

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

    feedBack.style.display = "block";

    if (isValid) {
      feedBack.textContent = "Registration successful!";
      feedBack.style.color = "#28a745";
    } else {
      feedBack.innerHTML = messages.join("<br>");
      feedBack.style.color = "#dc3545";
    }
  });
});
