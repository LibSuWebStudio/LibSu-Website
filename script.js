const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const allNavItems = document.querySelectorAll('.nav-link');
allNavItems.forEach(link => {
  link.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      updateActiveLink(targetId);
    }
  });
});

const scrollHint = document.getElementById('scrollHint');
if (scrollHint) {
  scrollHint.addEventListener('click', () => {
    const workSection = document.getElementById('work');
    if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
  });
}

const sections = document.querySelectorAll('section');
function updateActiveLink(currentId) {
  allNavItems.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    if (href === currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

const observerOptions = { threshold: 0.35 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      if (id) updateActiveLink(id);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

const fadeElements = document.querySelectorAll('.fade-up');
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

fadeElements.forEach(el => revealObserver.observe(el));

window.addEventListener('load', () => {
  updateActiveLink('welcome');
  const heroFade = document.querySelector('.hero .fade-up');
  if (heroFade) heroFade.classList.add('revealed');
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('revealed');
      revealObserver.unobserve(el);
    }
  });
});

const contactForm = document.getElementById('demoForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("✨ Thanks for reaching out — we'll get back to you within 24 hours.");
    contactForm.reset();
  });
}

window.addEventListener('scroll', () => {
  const hero = document.getElementById('welcome');
  if (hero) {
    hero.style.background = "#F8F8F8";
  }
});