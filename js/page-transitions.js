// Smooth page transitions
(function() {
  'use strict';

  // Fade out duration in ms
  const FADE_OUT_DURATION = 200;

  // Add fade-out class to CSS if it doesn't exist
  function addTransitionStyles() {
    const styleId = 'page-transition-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .page-fade-out {
        opacity: 0 !important;
        transition: opacity ${FADE_OUT_DURATION}ms ease-out !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Handle link clicks for smooth transitions
  function handleLinkClick(e) {
    const link = e.target.closest('a');

    // Only handle internal links
    if (!link) return;
    if (link.hostname !== window.location.hostname) return;
    if (link.target === '_blank') return;
    if (link.getAttribute('href')?.startsWith('#')) return;

    // Prevent default and do smooth transition
    e.preventDefault();
    const href = link.href;

    // Fade out current page
    const body = document.body;
    body.classList.add('page-fade-out');

    // Navigate after fade out
    setTimeout(() => {
      window.location.href = href;
    }, FADE_OUT_DURATION);
  }

  // Initialize on page load
  function init() {
    addTransitionStyles();
    document.addEventListener('click', handleLinkClick);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
