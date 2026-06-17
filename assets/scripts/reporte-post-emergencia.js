function selectEstado(el) {
  document.querySelectorAll('[onclick*="selectEstado"]').forEach(function (e) {
    e.style.borderColor = 'var(--border)'; e.style.background = 'white';
    e.querySelector('div:last-child').style.color = 'var(--muted)';
  });
  el.style.borderColor = 'var(--navy)'; el.style.background = '#eef2f7';
  el.querySelector('div:last-child').style.color = 'var(--navy)';
}

function selectScale(btn) {
  document.querySelectorAll('.scale-btn').forEach(function (b) { b.classList.remove('sel'); });
  btn.classList.add('sel');
}

function submitPostReport() {
  alert('Reporte post-emergencia enviado. Gracias por completarlo.');
  window.location.href = 'historial-alertas.html';
}
