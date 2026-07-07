'use strict';

var editingRow = null; // fila que se está editando (null = modo "agregar")

function initials(name) {
  var parts = name.trim().split(/\s+/);
  var letters = parts[0] ? parts[0][0] : '';
  if (parts[1]) letters += parts[1][0];
  return letters.toUpperCase();
}

var avatarColors = [
  { bg: '#dde8f5', text: 'var(--navy)' },
  { bg: '#fef3c7', text: '#92400e' },
  { bg: '#dcfce7', text: '#166534' },
  { bg: '#ede9fe', text: '#6d28d9' }
];

function buildContactRow(name, phone, relation, priority) {
  var row = document.createElement('div');
  row.className = 'contact-row';
  row.dataset.name = name;
  row.dataset.phone = phone;
  row.dataset.relation = relation;
  row.dataset.priority = priority;

  var color = avatarColors[Math.floor(Math.random() * avatarColors.length)];

  row.innerHTML =
    '<div class="contact-initials" style="background:' + color.bg + ';color:' + color.text + ';">' + initials(name) + '</div>' +
    '<div style="flex:1;">' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
        '<span class="contact-name" style="font-size:14px;font-weight:700;color:var(--navy);">' + name + '</span>' +
        '<span class="priority-tag priority-tag--' + priority + '">Prioridad ' + priority + '</span>' +
      '</div>' +
      '<div class="contact-meta" style="font-size:12.5px;color:var(--muted);margin-top:2px;">' + relation + ' · ' + phone + '</div>' +
    '</div>' +
    '<div style="display:flex;align-items:center;gap:8px;">' +
      '<button class="share-map" onclick="shareMap(this)">Compartir mapa</button>' +
      '<button class="btn-secondary" style="padding:6px 12px;font-size:12px;" onclick="editContact(this)">Editar</button>' +
      '<button class="btn-secondary" style="padding:6px 12px;font-size:12px;color:var(--sos);border-color:#fca5a5;" onclick="deleteContact(this)">Eliminar</button>' +
    '</div>';
  return row;
}

function updateContactRow(row, name, phone, relation, priority) {
  row.dataset.name = name;
  row.dataset.phone = phone;
  row.dataset.relation = relation;
  row.dataset.priority = priority;
  row.querySelector('.contact-name').textContent = name;
  row.querySelector('.contact-meta').textContent = relation + ' · ' + phone;
  var tag = row.querySelector('.priority-tag');
  tag.className = 'priority-tag priority-tag--' + priority;
  tag.textContent = 'Prioridad ' + priority;
}

function resetContactModal() {
  document.getElementById('contactName').value = '';
  document.getElementById('contactPhone').value = '';
  document.getElementById('contactRelation').selectedIndex = 0;
  document.getElementById('contactPriority').selectedIndex = 0;
  document.getElementById('contactModalTitle').textContent = 'Agregar contacto de emergencia';
  editingRow = null;
}

function saveContact() {
  var nameInput = document.getElementById('contactName');
  var phoneInput = document.getElementById('contactPhone');
  var relationSelect = document.getElementById('contactRelation');
  var prioritySelect = document.getElementById('contactPriority');

  var name = nameInput.value.trim();
  var phone = phoneInput.value.trim();
  var relation = relationSelect.value;
  var priority = prioritySelect.value;

  if (!name || !phone) {
    alert('Completa al menos el nombre y el teléfono del contacto.');
    return;
  }

  if (editingRow) {
    updateContactRow(editingRow, name, phone, relation, priority);
  } else {
    var list = document.getElementById('contactsList');
    var newRow = buildContactRow(name, phone, relation, priority);
    list.appendChild(newRow);
  }

  resetContactModal();
  document.getElementById('addContactModal').style.display = 'none';
}

function editContact(btn) {
  var row = btn.closest('.contact-row');
  editingRow = row;

  document.getElementById('contactName').value = row.dataset.name;
  document.getElementById('contactPhone').value = row.dataset.phone;
  document.getElementById('contactRelation').value = row.dataset.relation;
  document.getElementById('contactPriority').value = row.dataset.priority;
  document.getElementById('contactModalTitle').textContent = 'Editar contacto de emergencia';

  document.getElementById('addContactModal').style.display = 'flex';
}

function deleteContact(btn) {
  var row = btn.closest('.contact-row');
  var name = row.dataset.name || 'este contacto';
  if (confirm('¿Eliminar a "' + name + '" de tus contactos de emergencia?')) {
    row.remove();
  }
}

function shareMap(btn) {
  var row = btn.closest('.contact-row');
  var name = row.dataset.name || row.querySelector('.contact-name').textContent;
  alert('Ubicación compartida con ' + name + '. Recibirá un enlace de seguimiento en tiempo real.');
}
