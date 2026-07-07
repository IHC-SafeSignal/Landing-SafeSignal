function showSave() { document.getElementById('saveBar').classList.add('visible'); }
function hideSave() { document.getElementById('saveBar').classList.remove('visible'); }

function selSens(btn) {
  document.querySelectorAll('.sens-btn').forEach(function (b) { b.classList.remove('sel'); });
  btn.classList.add('sel');
  showSave();
}

function setTheme(t) {
  var l = document.getElementById('themeLight'), d = document.getElementById('themeDark');
  if (t === 'light') {
    l.style.background = 'var(--navy)'; l.style.color = 'white'; l.style.borderColor = 'var(--navy)';
    d.style.background = 'white'; d.style.color = 'var(--muted)'; d.style.borderColor = 'var(--border)';
  } else {
    d.style.background = '#1e293b'; d.style.color = 'white'; d.style.borderColor = '#1e293b';
    l.style.background = 'white'; l.style.color = 'var(--muted)'; l.style.borderColor = 'var(--border)';
  }
  showSave();
}
