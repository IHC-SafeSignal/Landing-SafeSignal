// Icono simple según el tipo de dispositivo elegido en el modal
function deviceIcon(type) {
  if (type === 'Botón de pánico') {
    return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L3 6V11C3 15.4 6.5 19.5 11 21C15.5 19.5 19 15.4 19 11V6L11 2Z" stroke="#1d4ed8" stroke-width="1.5" fill="none"/></svg>';
  }
  if (type === 'Sensor de movimiento') {
    return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="#1d4ed8" stroke-width="1.5"/><path d="M7 11C7 8.8 8.8 7 11 7C13.2 7 15 8.8 15 11" stroke="#1d4ed8" stroke-width="1.4" stroke-linecap="round"/></svg>';
  }
  if (type === 'Cámara') {
    return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="6" width="14" height="10" rx="2" stroke="#1d4ed8" stroke-width="1.5"/><path d="M16 9L20 6.5V15.5L16 13" stroke="#1d4ed8" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  }
  return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="6" width="18" height="12" rx="3" stroke="#1d4ed8" stroke-width="1.5"/><path d="M6 6V5C6 3.3 7.3 2 9 2H13C14.7 2 16 3.3 16 5V6" stroke="#1d4ed8" stroke-width="1.5"/><circle cx="11" cy="12" r="2" fill="#1d4ed8"/></svg>';
}

function buildDeviceCard(name, type, code) {
  var card = document.createElement('div');
  card.className = 'device-card';
  card.dataset.device = name;
  card.innerHTML =
    '<div class="device-header">' +
      '<div class="device-icon" style="background:#dbeafe;">' + deviceIcon(type) + '</div>' +
      '<span class="badge badge--green" style="font-size:10.5px;">Conectado</span>' +
    '</div>' +
    '<div style="font-size:14px;font-weight:700;color:var(--navy);margin-top:8px;">' + name + '</div>' +
    '<div style="font-size:12px;color:var(--muted);margin-top:2px;">' + type + ' · S/N: ' + code + '</div>' +
    '<div style="margin-top:12px;">' +
      '<div style="font-size:11.5px;color:var(--muted);margin-bottom:4px;">Batería</div>' +
      '<div class="batt-bar"><div class="batt-fill" style="width:100%;background:#22c55e;"></div></div>' +
      '<div style="font-size:11.5px;color:var(--muted);margin-top:3px;">100% · Recién vinculado</div>' +
    '</div>' +
    '<div style="display:flex;gap:8px;margin-top:12px;">' +
      '<button class="btn-secondary" style="padding:6px 12px;font-size:12px;flex:1;" onclick="configureDevice(this)">Configurar</button>' +
      '<button class="btn-secondary" style="padding:6px 12px;font-size:12px;color:var(--sos);border-color:#fca5a5;" onclick="unlinkDevice(this)">Desvincular</button>' +
    '</div>';
  return card;
}

// Vincula un nuevo dispositivo IoT desde el modal
function pairDevice() {
  var nameInput = document.getElementById('deviceName');
  var typeSelect = document.getElementById('deviceType');
  var codeInput = document.getElementById('deviceCode');

  var name = nameInput.value.trim();
  var code = codeInput.value.trim();

  if (!name || !code) {
    alert('Completa el nombre del dispositivo y el código de vinculación.');
    return;
  }

  var grid = document.getElementById('deviceGrid');
  var addCard = document.querySelector('.add-device-card');
  var newCard = buildDeviceCard(name, typeSelect.value, code);
  grid.insertBefore(newCard, addCard);

  // Limpia el formulario y cierra el modal
  nameInput.value = '';
  codeInput.value = '';
  typeSelect.selectedIndex = 0;
  document.getElementById('pairModal').style.display = 'none';
}

// Reconecta un dispositivo desconectado
function reconnectDevice(btn) {
  var card = btn.closest('.device-card');
  var badge = card.querySelector('.badge');
  badge.className = 'badge badge--green';
  badge.style.fontSize = '10.5px';
  badge.textContent = 'Conectado';

  var icon = card.querySelector('.device-icon');
  icon.style.background = '#dbeafe';

  var fill = card.querySelector('.batt-fill');
  fill.style.width = '100%';
  fill.style.background = '#22c55e';

  var lastLines = card.querySelectorAll('div');
  lastLines[lastLines.length - 1].textContent = '100% · Reconectado ahora';

  // Reemplaza los botones "Reconectar / Eliminar" por "Configurar / Desvincular"
  var actions = btn.parentElement;
  var buttons = actions.querySelectorAll('button');
  buttons[0].textContent = 'Configurar';
  buttons[0].setAttribute('onclick', 'configureDevice(this)');
  buttons[1].textContent = 'Desvincular';
  buttons[1].setAttribute('onclick', 'unlinkDevice(this)');
}

// Elimina el dispositivo de la lista (para Eliminar / Desvincular)
function removeDeviceCard(btn) {
  var card = btn.closest('.device-card');
  var name = card.dataset.device || 'este dispositivo';
  if (confirm('¿Seguro que quieres quitar "' + name + '" de tus dispositivos?')) {
    card.remove();
  }
}

function removeDevice(btn) { removeDeviceCard(btn); }
function unlinkDevice(btn) { removeDeviceCard(btn); }

// Abre un pequeño panel de configuración para el dispositivo
function configureDevice(btn) {
  var card = btn.closest('.device-card');
  var name = card.dataset.device || 'dispositivo';
  var newName = prompt('Nuevo nombre para "' + name + '":', name);
  if (newName && newName.trim()) {
    card.dataset.device = newName.trim();
    card.querySelector('div[style*="font-weight:700"]').textContent = newName.trim();
  }
}
