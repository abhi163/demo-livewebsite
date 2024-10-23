document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  
  if (username === "admin" && password === "password123") {
      alert("Login successful!");
      // Redirect to a different page (optional)
      // window.location.href = "dashboard.html";
  } else {
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.display = "block";
  }
});
