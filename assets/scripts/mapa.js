'use strict';
var map = L.map('map').setView([-12.1219, -77.0289], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var redIcon = L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:#ef4444;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);"></div>', iconSize: [14,14], iconAnchor: [7,7] });
var yellowIcon = L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:#f59e0b;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);"></div>', iconSize: [14,14], iconAnchor: [7,7] });
var greenIcon = L.divIcon({ className: '', html: '<div style="width:14px;height:14px;border-radius:50%;background:#22c55e;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);"></div>', iconSize: [14,14], iconAnchor: [7,7] });

var incidents = [
  { lat: -12.1210, lng: -77.0290, type: 'robo', risk: 'alto', title: 'Robo a mano armada', desc: 'Av. Javier Prado Este 1500', icon: redIcon },
  { lat: -12.1198, lng: -77.0350, type: 'acoso', risk: 'medio', title: 'Intento de acoso', desc: 'Las Begonias 450', icon: yellowIcon },
  { lat: -12.1240, lng: -77.0270, type: 'accidente', risk: 'medio', title: 'Accidente de tránsito', desc: 'Av. Arequipa cdra. 22', icon: yellowIcon },
  { lat: -12.1180, lng: -77.0310, type: 'vandalismo', risk: 'bajo', title: 'Vandalismo', desc: 'Parque Reducto', icon: greenIcon },
  { lat: -12.1260, lng: -77.0320, type: 'robo', risk: 'alto', title: 'Robo en tienda', desc: 'Centro Comercial Larcomar', icon: redIcon },
  { lat: -12.1200, lng: -77.0260, type: 'acoso', risk: 'medio', title: 'Acoso verbal', desc: 'Parque Kennedy', icon: yellowIcon },
  { lat: -12.1230, lng: -77.0340, type: 'accidente', risk: 'bajo', title: 'Choque menor', desc: 'Av. Diagonal', icon: greenIcon }
];

var markers = incidents.map(function (inc) {
  return L.marker([inc.lat, inc.lng], { icon: inc.icon })
    .addTo(map)
    .bindPopup('<strong>' + inc.title + '</strong><br>' + inc.desc)
    ._incType = inc.type;
});

window.filterMap = function (btn, type) {
  document.querySelectorAll('.map-filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  markers.forEach(function (marker) {
    if (type === 'all' || marker._incType === type) map.addLayer(marker);
    else map.removeLayer(marker);
  });
};
