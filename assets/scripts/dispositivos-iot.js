function pairDevice(el) {
  document.querySelectorAll('#pairModal [onclick*="pairDevice"]').forEach(function (e) {
    e.style.borderColor = 'var(--border)'; e.style.background = 'white';
  });
  el.style.borderColor = 'var(--navy)'; el.style.background = '#eef2f7';
}
