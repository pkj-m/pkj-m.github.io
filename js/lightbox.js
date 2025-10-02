// Photo Gallery Lightbox
(function() {
  'use strict';

  let currentImageIndex = 0;
  let images = [];

  // Create lightbox HTML
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close lightbox">×</button>
    <button class="lightbox-nav prev" aria-label="Previous image">‹</button>
    <button class="lightbox-nav next" aria-label="Next image">›</button>
    <div class="lightbox-content">
      <img class="lightbox-image" src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  // Get elements
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
  const nextBtn = lightbox.querySelector('.lightbox-nav.next');

  // Collect all gallery images
  function initLightbox() {
    const photoItems = document.querySelectorAll('.photo-item');

    if (photoItems.length === 0) return;

    images = Array.from(photoItems).map(item => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.photo-caption');
      return {
        src: img.src,
        alt: img.alt,
        caption: caption ? caption.textContent : ''
      };
    });

    // Add click handlers to photo items
    photoItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        openLightbox(index);
      });
    });
  }

  // Open lightbox
  function openLightbox(index) {
    currentImageIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Update lightbox content
  function updateLightbox() {
    const image = images[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.caption;

    // Update nav buttons
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === images.length - 1;
  }

  // Navigate to previous image
  function showPrevImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateLightbox();
    }
  }

  // Navigate to next image
  function showNextImage() {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      updateLightbox();
    }
  }

  // Event listeners
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);

  // Click outside image to close
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;

    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrevImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
    }
  });

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();
