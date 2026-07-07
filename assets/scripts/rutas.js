'use strict';
window.calcRoute = function () {
  var dest = document.getElementById('destInput').value;
  if (!dest) { alert('Ingresa un destino'); return; }
  alert('Ruta calculada hacia: ' + dest + '\nRuta segura: 2.4 km · 18 min');
};
