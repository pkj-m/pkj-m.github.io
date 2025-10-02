// Lazy load images with fade-in effect
(function() {
  'use strict';

  // Check if the page has images to lazy load
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if (lazyImages.length === 0) {
    return; // No lazy images, exit
  }

  // Modern browsers support native lazy loading
  // But we'll add a loaded class for the fade-in effect
  lazyImages.forEach(function(img) {
    // If image is already loaded (from cache)
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      // Add loaded class when image loads
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      });

      // Handle load errors
      img.addEventListener('error', function() {
        console.error('Failed to load image:', img.src);
        img.classList.add('loaded'); // Still add class to prevent flickering
      });
    }
  });

  // Fallback for browsers that don't support native lazy loading
  if (!('loading' in HTMLImageElement.prototype)) {
    // Use Intersection Observer as fallback
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }
})();
