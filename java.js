/* ================================================
   Gerardo Meza — Site JS
   - Active nav link highlighting
   - Lightbox for gallery / concerts images
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Active nav link ---
  var links = document.querySelectorAll('nav.menu a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Lightbox ---
  var lb = document.createElement('div');
  lb.id = 'lightbox';
  var lbImg = document.createElement('img');
  lb.appendChild(lbImg);
  document.body.appendChild(lb);

  // Close on click
  lb.addEventListener('click', function () {
    lb.classList.remove('open');
    lbImg.src = '';
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      lb.classList.remove('open');
      lbImg.src = '';
    }
  });

  // Attach to gallery/concert images
  var galleryImgs = document.querySelectorAll('.G-Cont img');
  galleryImgs.forEach(function (img) {
    img.addEventListener('click', function () {
      lbImg.src = img.src;
      lb.classList.add('open');
    });
  });

  // --- Dynamic footer year ---
  var yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
