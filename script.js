// script.js

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Simple contact form validation (on contact.html)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    alert('Message sent successfully! (Simulation)');
    form.reset();
  });
}

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
