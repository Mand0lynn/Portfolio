// Scroll to top button logic
// Add this to any element with onclick="scrollToTop()"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Responsive nav toggle (optional: if you use a hamburger nav)
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Example accessibility enhancement: focus-visible polyfill for improved keyboard nav
// You can add more JS enhancements if needed.

