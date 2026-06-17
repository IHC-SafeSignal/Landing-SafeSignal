'use strict';
var map = L.map('map').setView([-12.1219, -77.0289], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var safeRoute = [
  [-12.1219, -77.0289],
  [-12.1210, -77.0300],
  [-12.1200, -77.0320],
  [-12.1190, -77.0340],
  [-12.1180, -77.0360]
];
L.polyline(safeRoute, { color: '#22c55e', weight: 5, opacity: .85 }).addTo(map);

var userIcon = L.divIcon({ className: '', html: '<div style="width:16px;height:16px;border-radius:50%;background:#1e3a5f;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.4);animation:pulse 1.4s infinite;"></div>', iconSize: [16,16], iconAnchor: [8,8] });
L.marker(safeRoute[0], { icon: userIcon }).addTo(map).bindPopup('Tu ubicación actual').openPopup();

var destIcon = L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:#ef4444;border:2px solid white;"></div>', iconSize: [14,14], iconAnchor: [7,7] });
L.marker(safeRoute[safeRoute.length - 1], { icon: destIcon }).addTo(map).bindPopup('Destino: Av. Larco 345');

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
