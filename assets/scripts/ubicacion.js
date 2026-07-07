'use strict';
window.startSharing = function () {
  alert('Ubicación compartida con tus contactos seleccionados. El enlace expirará en 4 horas.');
};
window.copyShareLink = function () {
  navigator.clipboard && navigator.clipboard.writeText('https://safesignal.pe/loc/abc123');
  alert('Enlace copiado al portapapeles');
};
