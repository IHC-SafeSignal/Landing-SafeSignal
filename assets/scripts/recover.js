document.getElementById('btnSend').addEventListener('click', function () {
  var email = document.getElementById('email').value.trim();
  if (!email) { alert('Ingresa tu correo electrónico.'); return; }
  document.getElementById('successMsg').style.display = 'flex';
});
