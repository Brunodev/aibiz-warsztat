// Diagram lightbox — click to zoom, click again or ESC to close
(function() {
  'use strict';

  const wraps = document.querySelectorAll('.diagram-img-wrap');
  if (!wraps.length) return;

  let currentZoomed = null;

  function close() {
    if (!currentZoomed) return;
    currentZoomed.classList.remove('zoomed');
    document.body.style.overflow = '';
    currentZoomed = null;
  }

  function open(wrap) {
    if (currentZoomed) close();
    wrap.classList.add('zoomed');
    document.body.style.overflow = 'hidden';
    currentZoomed = wrap;
  }

  wraps.forEach(function(wrap) {
    wrap.addEventListener('click', function(e) {
      if (currentZoomed === wrap) {
        close();
      } else {
        open(wrap);
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') close();
  });
})();
