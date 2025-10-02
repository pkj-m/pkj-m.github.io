// Automatic Table of Contents generator for blog posts
(function() {
  'use strict';

  // Generate unique IDs for headings
  function generateId(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Create TOC element
  function createTOC(headings) {
    const toc = document.createElement('nav');
    toc.className = 'table-of-contents';
    toc.setAttribute('aria-label', 'Table of contents');

    const title = document.createElement('div');
    title.className = 'toc-title';
    title.textContent = 'Contents';
    toc.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'toc-list';

    headings.forEach((heading, index) => {
      const li = document.createElement('li');
      li.className = 'toc-item';

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = 'toc-link';

      // Smooth scroll on click
      link.addEventListener('click', (e) => {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without jumping
        history.pushState(null, null, `#${heading.id}`);
      });

      li.appendChild(link);
      list.appendChild(li);
    });

    toc.appendChild(list);
    return toc;
  }

  // Highlight active section based on scroll position
  function updateActiveSection() {
    const headings = document.querySelectorAll('.blog-post h3[id]');
    const tocLinks = document.querySelectorAll('.toc-link');

    let activeIndex = 0;
    const scrollPosition = window.pageYOffset + 100; // offset for better UX

    headings.forEach((heading, index) => {
      if (heading.offsetTop <= scrollPosition) {
        activeIndex = index;
      }
    });

    tocLinks.forEach((link, index) => {
      if (index === activeIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Handle floating TOC on scroll
  function handleFloatingTOC(toc) {
    const tocOriginalPosition = toc.offsetTop;

    function onScroll() {
      const scrollPosition = window.pageYOffset;

      // When user scrolls past the original TOC position
      if (scrollPosition > tocOriginalPosition + 200) {
        toc.classList.add('floating');
        // Delay visibility for smooth transition
        setTimeout(() => {
          toc.classList.add('visible');
        }, 50);
      } else {
        toc.classList.remove('visible');
        setTimeout(() => {
          toc.classList.remove('floating');
        }, 400); // Match transition duration
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Initialize
  function init() {
    const blogPost = document.querySelector('.blog-post');
    if (!blogPost) return;

    // Find all h3 headings in the blog post
    const headings = blogPost.querySelectorAll('h3');

    // Need at least 3 headings to make TOC worthwhile
    if (headings.length < 3) return;

    // Add IDs to headings if they don't have them
    headings.forEach(heading => {
      if (!heading.id) {
        heading.id = generateId(heading.textContent);
      }
    });

    // Create and insert TOC
    const toc = createTOC(headings);

    // Insert TOC after post tags (or date if no tags)
    const postTags = blogPost.querySelector('.post-tags');
    const postDate = blogPost.querySelector('.post-date');

    if (postTags && postTags.nextSibling) {
      postTags.parentNode.insertBefore(toc, postTags.nextSibling);
    } else if (postDate && postDate.nextSibling) {
      postDate.parentNode.insertBefore(toc, postDate.nextSibling);
    }

    // Enable floating TOC behavior
    handleFloatingTOC(toc);

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    // Initial update
    updateActiveSection();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
