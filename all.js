/**
 * Core JavaScript functionality
 * Includes: Scroll management, responsive navigation, and accessibility enhancements
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========== Scroll to Top Button ==========
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  if (scrollToTopBtn) {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });
  }

  // ========== Responsive Navigation ==========
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (menuToggle) {
    function toggleMenu() {
      const nav = document.querySelector('.nav-links');
      nav.classList.toggle('open');
      menuToggle.setAttribute(
        'aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav items
    document.querySelectorAll('.nav-links a').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleMenu();
        }
      });
    });
  }

  // ========== Project Card Interactions ==========
  document.querySelectorAll('.project-card').forEach(card => {
    // Add focusable behavior for keyboard navigation
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keyup', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const link = this.querySelector('a');
        if (link) link.click();
      }
    });
  });

  // ========== Lazy Loading Enhancement ==========
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      img.addEventListener('load', function() {
        this.parentElement.classList.add('loaded');
      });
    });
  } else {
    // Fallback for browsers without native lazy loading
    const lazyLoadInstance = new LazyLoad({
      elements_selector: 'img[loading="lazy"]',
      callback_loaded: (img) => {
        img.parentElement.classList.add('loaded');
      }
    });
  }

  // ========== Accessibility Enhancements ==========
  // Add focus-visible polyfill if needed
  if (!CSS.supports('selector(:focus-visible)')) {
    import('focus-visible').then(module => {
      module.applyFocusVisiblePolyfill();
    });
  }
});
