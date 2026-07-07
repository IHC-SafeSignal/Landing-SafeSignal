function saveProfile() {
  var user = JSON.parse(localStorage.getItem('safesignalUser') || '{}');
  user.nombre = (document.getElementById('pNombres').value + ' ' + document.getElementById('pApellidos').value).trim() || user.nombre;
  user.email = document.getElementById('pEmail').value || user.email;
  user.distrito = document.getElementById('pDistrito').value;
  localStorage.setItem('safesignalUser', JSON.stringify(user));
  document.getElementById('saveBar').style.display = 'flex';
  setTimeout(function () { document.getElementById('saveBar').style.display = 'none'; }, 3000);
}

document.querySelectorAll('[data-modal]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById(btn.dataset.modal).style.display = 'flex';
  });
});

var user = JSON.parse(localStorage.getItem('safesignalUser') || '{}');
if (user.nombre) {
  var parts = user.nombre.split(' ');
  document.getElementById('pNombres').value = parts[0] || '';
  document.getElementById('pApellidos').value = parts.slice(1).join(' ') || '';
  document.getElementById('bigAvatar').textContent = (user.nombre[0] || 'U').toUpperCase();
}
if (user.email) document.getElementById('pEmail').value = user.email;
if (user.telefono) document.getElementById('pTel').value = user.telefono;
