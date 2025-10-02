// Social sharing functionality for blog posts
(function() {
  'use strict';

  const blogPost = document.querySelector('.blog-post');
  if (!blogPost) return; // Not on a blog post page

  // Get post information
  const postTitle = document.querySelector('.blog-post h2');
  const postUrl = window.location.href;

  if (!postTitle) return;

  const title = postTitle.textContent;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(postUrl);

  // Create share buttons container
  const shareContainer = document.createElement('div');
  shareContainer.className = 'social-share';

  // Add label
  const label = document.createElement('span');
  label.className = 'social-share-label';
  label.textContent = 'Share:';
  shareContainer.appendChild(label);

  // Twitter share button
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=pkj__m`;
  const twitterButton = document.createElement('a');
  twitterButton.href = twitterUrl;
  twitterButton.className = 'share-button';
  twitterButton.target = '_blank';
  twitterButton.rel = 'noopener noreferrer';
  twitterButton.textContent = 'X';
  twitterButton.setAttribute('aria-label', 'Share on X (Twitter)');
  shareContainer.appendChild(twitterButton);

  // LinkedIn share button
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const linkedinButton = document.createElement('a');
  linkedinButton.href = linkedinUrl;
  linkedinButton.className = 'share-button';
  linkedinButton.target = '_blank';
  linkedinButton.rel = 'noopener noreferrer';
  linkedinButton.textContent = 'LinkedIn';
  linkedinButton.setAttribute('aria-label', 'Share on LinkedIn');
  shareContainer.appendChild(linkedinButton);

  // Copy link button
  const copyButton = document.createElement('button');
  copyButton.className = 'share-button';
  copyButton.textContent = 'Copy Link';
  copyButton.setAttribute('aria-label', 'Copy link to clipboard');
  copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(postUrl).then(function() {
      const originalText = copyButton.textContent;
      copyButton.textContent = 'Copied!';
      setTimeout(function() {
        copyButton.textContent = originalText;
      }, 2000);
    }).catch(function(err) {
      console.error('Failed to copy:', err);
    });
  });
  shareContainer.appendChild(copyButton);

  // Insert share buttons after the post content, before post navigation
  const postNavigation = document.querySelector('.post-navigation');
  if (postNavigation) {
    postNavigation.parentNode.insertBefore(shareContainer, postNavigation);
  } else {
    // If no post navigation, append to the end of blog post
    blogPost.appendChild(shareContainer);
  }
})();
