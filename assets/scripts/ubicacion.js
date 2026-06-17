'use strict';
var map = L.map('map').setView([-12.1219, -77.0289], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var userIcon = L.divIcon({ className: '', html: '<div style="width:18px;height:18px;border-radius:50%;background:#1e3a5f;border:3px solid white;box-shadow:0 2px 10px rgba(0,0,0,.35);"></div>', iconSize: [18,18], iconAnchor: [9,9] });
L.marker([-12.1219, -77.0289], { icon: userIcon }).addTo(map).bindPopup('Tu ubicación: Av. Larco 1135, Miraflores').openPopup();

L.circle([-12.1219, -77.0289], { radius: 80, color: '#1e3a5f', fillColor: '#1e3a5f', fillOpacity: .08, weight: 1 }).addTo(map);

window.startSharing = function () {
  alert('Ubicación compartida con tus contactos seleccionados. El enlace expirará en 4 horas.');
};
window.copyShareLink = function () {
  navigator.clipboard && navigator.clipboard.writeText('https://safesignal.pe/loc/abc123');
  alert('Enlace copiado al portapapeles');
};
