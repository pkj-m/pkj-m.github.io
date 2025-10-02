// Blog tag filtering
(function() {
  'use strict';

  const filterButtons = document.querySelectorAll('.tag-filter');
  const blogItems = document.querySelectorAll('.blog-item');

  if (filterButtons.length === 0 || blogItems.length === 0) {
    return; // Not on blog list page
  }

  // Filter posts by tag
  function filterPosts(selectedTag) {
    blogItems.forEach(function(item) {
      const itemTags = item.getAttribute('data-tags');

      if (selectedTag === 'all') {
        item.classList.remove('hidden');
      } else {
        // Check if item has the selected tag
        if (itemTags && itemTags.toLowerCase().includes(selectedTag.toLowerCase())) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      }
    });
  }

  // Handle filter button clicks
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });

      // Add active class to clicked button
      button.classList.add('active');

      // Get selected tag and filter
      const selectedTag = button.getAttribute('data-tag');
      filterPosts(selectedTag);
    });
  });
})();
