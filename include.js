// Load header and footer into all pages
document.addEventListener('DOMContentLoaded', function() {
  // Inject header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    });

  // Inject footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .then(() => {
      // Initialize scripts after injection
      initMobileMenu();
      secureExternalLinks();
    });
});

// Secure all external links
function secureExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
      if (!link.hasAttribute('aria-label')) {
        link.setAttribute('aria-label', `${link.textContent} (opens in new tab)`);
      }
    }
  });
}
