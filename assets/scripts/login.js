document.getElementById('btnLogin').addEventListener('click', function () {
  var email = document.getElementById('email').value.trim();
  var pass = document.getElementById('password').value;
  if (!email || !pass) { alert('Completa todos los campos.'); return; }
  localStorage.setItem('safesignalUser', JSON.stringify({
    email: email,
    nombre: email.split('@')[0],
    distrito: 'Lima, PE'
  }));
  window.location.href = 'dashboard.html';
});
