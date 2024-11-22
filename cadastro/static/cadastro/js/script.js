document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload on submit

  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;

  // Simple validation or message (can be extended further)
  alert(`Thank you, ${firstName} ${lastName}! Your information has been submitted.`);

  // Resets the form after submission
  document.getElementById('contactForm').reset();
});