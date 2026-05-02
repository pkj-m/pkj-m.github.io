// Theme toggle: light <-> dark with glitch transition
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var GLITCH_DURATION = 800;
  var SWAP_DELAY = 150;

  function currentTheme() {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }

  function labelFor(theme) {
    // Button labels the destination shell prompt: $ = user, # = root
    return theme === 'dark' ? '$' : '#';
  }

  function ariaLabelFor(theme) {
    return theme === 'dark'
      ? 'Drop privileges (switch to light mode)'
      : 'Elevate to root (switch to dark mode)';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  function triggerGlitch() {
    var titles = document.querySelectorAll('.glitch');
    titles.forEach(function (el) {
      el.classList.add('glitch-active');
      setTimeout(function () {
        el.classList.remove('glitch-active');
      }, GLITCH_DURATION);
    });
  }

  function init() {
    // Build the toggle button
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';

    var initial = currentTheme();
    btn.textContent = labelFor(initial);
    btn.setAttribute('aria-label', ariaLabelFor(initial));

    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';

      // Glitch immediately
      triggerGlitch();

      // Mid-glitch, swap the theme
      setTimeout(function () {
        setTheme(next);
        btn.textContent = labelFor(next);
        btn.setAttribute('aria-label', ariaLabelFor(next));
      }, SWAP_DELAY);
    });

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
