function notifyUser() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  // Email regex (standard)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    message.style.color = "red";
    message.innerText = "❌ Please Fill the Email Address";
    return;
  }

  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.innerText = "❌ Give me a valid email (example: name@gmail.com)";
    return;
  }

  // If email is correct
  message.style.color = "#90ee90";
  message.innerText = "✨ Thank you! We’ll notify you soon.";
  document.getElementById("email").value = "";
}
document.getElementById("email").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    notifyUser();
  }
});

