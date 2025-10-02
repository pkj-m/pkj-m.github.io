// Reading progress indicator for blog posts
(function() {
  'use strict';

  // Create progress bar element
  function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: black;
      z-index: 9999;
      transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);
    return progressBar;
  }

  // Calculate and update progress
  function updateProgress(progressBar) {
    // Get scroll position
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate progress percentage
    const scrollableHeight = documentHeight - windowHeight;
    const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

    // Update progress bar width
    progressBar.style.width = progress + '%';

    // Color transitions based on progress
    if (progress < 25) {
      progressBar.style.background = 'black';
    } else if (progress < 50) {
      progressBar.style.background = 'rgba(0, 0, 0, 0.8)';
    } else if (progress < 75) {
      progressBar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
      progressBar.style.background = 'black';
    }
  }

  // Initialize
  function init() {
    // Only run on blog post pages (those with .blog-post class)
    if (!document.querySelector('.blog-post')) return;

    const progressBar = createProgressBar();

    // Update on scroll
    window.addEventListener('scroll', () => updateProgress(progressBar), { passive: true });

    // Update on resize
    window.addEventListener('resize', () => updateProgress(progressBar), { passive: true });

    // Initial update
    updateProgress(progressBar);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
