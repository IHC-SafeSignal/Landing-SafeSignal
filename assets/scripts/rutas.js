'use strict';
var map = L.map('map').setView([-12.1219, -77.0289], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var safeRoute = [[-12.1219,-77.0289],[-12.1200,-77.0310],[-12.1185,-77.0340],[-12.1170,-77.0360]];
var warnRoute = [[-12.1219,-77.0289],[-12.1230,-77.0270],[-12.1250,-77.0300],[-12.1270,-77.0340]];

L.polyline(safeRoute, { color: '#22c55e', weight: 5, opacity: .9 }).addTo(map);
L.polyline(warnRoute, { color: '#f59e0b', weight: 4, opacity: .6, dashArray: '8 6' }).addTo(map);

var startIcon = L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:#1e3a5f;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);"></div>', iconSize: [14,14], iconAnchor: [7,7] });
var endIcon = L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:#ef4444;border:2px solid white;"></div>', iconSize: [14,14], iconAnchor: [7,7] });

L.marker(safeRoute[0], { icon: startIcon }).addTo(map).bindPopup('Origen: Tu ubicación');
L.marker(safeRoute[safeRoute.length-1], { icon: endIcon }).addTo(map).bindPopup('Destino');

window.calcRoute = function () {
  var dest = document.getElementById('destInput').value;
  if (!dest) { alert('Ingresa un destino'); return; }
  alert('Ruta calculada hacia: ' + dest + '\nRuta segura: 2.4 km · 18 min');
};
