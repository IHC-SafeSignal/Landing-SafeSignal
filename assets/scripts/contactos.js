'use strict';
document.querySelectorAll('.share-map').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var row = this.closest('.contact-row');
    var name = row.querySelector('[style*="font-weight:700"]').textContent;
    alert('Ubicación compartida con ' + name + '. Recibirá un enlace de seguimiento en tiempo real.');
  });
});
