function openValidate(title, addr) {
  document.getElementById('valTitle').textContent = title;
  document.getElementById('valAddr').textContent = addr;
  document.getElementById('validatePanel').style.display = 'block';
}

function closeValidate() {
  document.getElementById('validatePanel').style.display = 'none';
}

function validateReport(confirmed) {
  var msg = confirmed ? 'Reporte confirmado. Gracias por contribuir a la seguridad.' : 'Gracias por tu respuesta.';
  alert(msg);
  closeValidate();
}
