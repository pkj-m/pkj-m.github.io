// Back to top button for long content
(function() {
  'use strict';

  const SCROLL_THRESHOLD = 600; // Show button after scrolling this many pixels
  const SCROLL_DURATION = 800; // Smooth scroll duration in ms

  // Create back to top button
  function createButton() {
    const button = document.createElement('button');
    button.id = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
      position: fixed;
      bottom: 48px;
      right: 48px;
      width: 48px;
      height: 48px;
      background: white;
      border: 1px solid black;
      color: black;
      font-size: 24px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.2s ease, outline 0.2s ease;
      z-index: 1000;
      font-family: "IBM Plex Mono", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    `;

    // Add focus-visible event for keyboard navigation
    button.addEventListener('focus', function() {
      this.style.outline = '2px solid black';
      this.style.outlineOffset = '4px';
    });

    // Add hover rotation effect
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'rotate(-15deg) scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'rotate(0deg) scale(1)';
    });
    button.addEventListener('blur', function() {
      this.style.outline = 'none';
    });

    button.addEventListener('click', scrollToTop);
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });

    document.body.appendChild(button);
    return button;
  }

  // Smooth scroll to top
  function scrollToTop() {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);

      // Easing function (ease-in-out)
      const easing = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition * (1 - easing));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Toggle button visibility based on scroll position
  function toggleButton(button) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > SCROLL_THRESHOLD) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  }

  // Initialize
  function init() {
    // Only run on blog post pages
    if (!document.querySelector('.blog-post')) return;

    const button = createButton();

    // Update on scroll
    window.addEventListener('scroll', () => toggleButton(button), { passive: true });

    // Initial check
    toggleButton(button);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
