// script.js
// Simple smooth scroll for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: minimal console greeting
console.log('LibSu Web Studio — senior craft, minimal aesthetic');

// Contact form alert (simulates submission, can be replaced with actual backend)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out. We will reply within 24h. (demo)');
    // you could add fetch/axios here later
    contactForm.reset();
  });
}