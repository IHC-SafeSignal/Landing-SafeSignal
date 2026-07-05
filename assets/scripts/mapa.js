'use strict';
var incidents = [
  { top: '38%', left: '46%', type: 'robo', risk: 'alto', title: 'Robo a mano armada', desc: 'Av. Javier Prado Este 1500' },
  { top: '55%', left: '30%', type: 'acoso', risk: 'medio', title: 'Intento de acoso', desc: 'Las Begonias 450' },
  { top: '22%', left: '62%', type: 'accidente', risk: 'medio', title: 'Accidente de tránsito', desc: 'Av. Arequipa cdra. 22' },
  { top: '68%', left: '58%', type: 'vandalismo', risk: 'bajo', title: 'Vandalismo', desc: 'Parque Reducto' },
  { top: '48%', left: '72%', type: 'robo', risk: 'alto', title: 'Robo en tienda', desc: 'Centro Comercial Larcomar' },
  { top: '30%', left: '38%', type: 'acoso', risk: 'medio', title: 'Acoso verbal', desc: 'Parque Kennedy' },
  { top: '62%', left: '20%', type: 'accidente', risk: 'bajo', title: 'Choque menor', desc: 'Av. Diagonal' }
];

var mapView = document.getElementById('map');

incidents.forEach(function (inc) {
  var pin = document.createElement('div');
  pin.className = 'map-pin map-pin--' + inc.risk;
  pin.style.top = inc.top;
  pin.style.left = inc.left;
  pin.dataset.type = inc.type;
  pin.title = inc.title + ' — ' + inc.desc;
  mapView.appendChild(pin);
});

window.filterMap = function (btn, type) {
  document.querySelectorAll('.map-filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  mapView.querySelectorAll('.map-pin').forEach(function (pin) {
    pin.style.display = (type === 'all' || pin.dataset.type === type) ? '' : 'none';
  });
};
