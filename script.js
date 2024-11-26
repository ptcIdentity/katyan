// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'demo' && password === 'demo') {
    alert('Authenticating...');
    // Redirect or perform further actions
  } else {
    document.getElementById('error-message').textContent = 'Invalid username or password.';
  }
});