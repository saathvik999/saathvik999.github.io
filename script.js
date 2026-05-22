// ===== CUSTOM CURSOR =====
document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--cx', e.clientX + 'px');
  document.body.style.setProperty('--cy', e.clientY + 'px');
});

// ===== NAVBAR SCROLL SHRINK =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.padding = window.scrollY > 60
    ? '0.7rem 4rem'
    : '1.2rem 4rem';
});

// ===== MOBILE HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.textContent = '☰';
  });
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  'section > *:not(.hero-bg-text), .project-card, .timeline-item, .skill-card, .cert-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});
