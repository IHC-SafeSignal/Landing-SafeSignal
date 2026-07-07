document.getElementById('btnRegister').addEventListener('click', function () {
  var n = document.getElementById('nombres').value.trim();
  var a = document.getElementById('apellidos').value.trim();
  var e = document.getElementById('email').value.trim();
  var t = document.getElementById('telefono').value.trim();
  var d = document.getElementById('distrito').value;
  var p = document.getElementById('pass').value;
  var pc = document.getElementById('passConf').value;
  if (!n || !a || !e || !t || !d || !p) { alert('Completa todos los campos.'); return; }
  if (p !== pc) { alert('Las contraseñas no coinciden.'); return; }
  if (p.length < 8) { alert('La contraseña debe tener al menos 8 caracteres.'); return; }
  localStorage.setItem('safesignalUser', JSON.stringify({
    nombre: n + ' ' + a,
    email: e,
    telefono: t,
    distrito: d
  }));
  window.location.href = 'dashboard.html';
});
