// Enhanced glitch effects with random flickers
(function() {
  'use strict';

  const FLICKER_INTERVAL_MIN = 8000;  // Minimum 8 seconds between flickers
  const FLICKER_INTERVAL_MAX = 15000; // Maximum 15 seconds between flickers
  const FLICKER_DURATION = 800;       // How long the flicker lasts

  // Get random interval between min and max
  function getRandomInterval() {
    return Math.random() * (FLICKER_INTERVAL_MAX - FLICKER_INTERVAL_MIN) + FLICKER_INTERVAL_MIN;
  }

  // Trigger a glitch flicker on an element
  function triggerGlitch(element) {
    element.classList.add('glitch-active');

    setTimeout(() => {
      element.classList.remove('glitch-active');
    }, FLICKER_DURATION);
  }

  // Schedule random glitch flickers
  function scheduleRandomGlitch(element) {
    const interval = getRandomInterval();

    setTimeout(() => {
      // Only trigger if element is in viewport
      const rect = element.getBoundingClientRect();
      const inViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (inViewport) {
        triggerGlitch(element);
      }

      // Schedule next glitch
      scheduleRandomGlitch(element);
    }, interval);
  }

  // Trigger glitch on page load
  function triggerLoadGlitch(element) {
    // Wait for page to settle, then trigger
    setTimeout(() => {
      triggerGlitch(element);
    }, 1500);
  }

  // Initialize
  function init() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(element => {
      // Trigger glitch on page load
      triggerLoadGlitch(element);

      // Schedule random glitches
      scheduleRandomGlitch(element);
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
