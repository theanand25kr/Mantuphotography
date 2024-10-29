document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseMessage = document.getElementById('responseMessage');

  if (name === '' || email === '' || message === '') {
    responseMessage.textContent = 'Please fill in all required fields.';
    responseMessage.style.color = 'red';
    return;
  }

  // Display confirmation message
  responseMessage.textContent = `Thank you, ${name}! We will get back to you soon.`;
  responseMessage.style.color = 'green';

  // Clear form fields
  document.getElementById('contactForm').reset();
});
