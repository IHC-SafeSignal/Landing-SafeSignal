'use strict';
var seconds = 0;
var timerEl = document.getElementById('segTimer');
var interval = setInterval(function () {
  seconds++;
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = seconds % 60;
  timerEl.textContent = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}, 1000);

window.stopTracking = function () {
  clearInterval(interval);
  if (confirm('¿Llegaste a tu destino con seguridad?')) window.location.href = 'historial-recorridos.html';
};
