var currentStep = 1;
var totalSteps = 4;

function nextStep(n) {
  document.getElementById('step' + currentStep).style.display = 'none';
  document.getElementById('step' + currentStep + 'item').className = 'step-item step-done';

  currentStep = n;

  document.getElementById('step' + currentStep).style.display = 'block';
  document.getElementById('step' + currentStep + 'item').className = 'step-item step-active';

  for (var i = currentStep + 1; i <= totalSteps; i++) {
    document.getElementById('step' + i + 'item').className = 'step-item step-pending';
  }
}

function selectType(el, name) {
  document.querySelectorAll('.type-btn').forEach(function (b) { b.classList.remove('selected'); });
  el.classList.add('selected');
}

function selectRisk(r) {
  ['alto', 'medio', 'bajo'].forEach(function (k) {
    var b = document.getElementById('risk-' + k);
    b.style.background = 'white'; b.style.color = 'var(--muted)'; b.style.borderColor = 'var(--border)';
  });
  var sel = document.getElementById('risk-' + r);
  if (r === 'alto') { sel.style.background = '#fff0f0'; sel.style.color = 'var(--sos)'; sel.style.borderColor = '#fca5a5'; }
  else if (r === 'medio') { sel.style.background = '#fffbeb'; sel.style.color = '#b45309'; sel.style.borderColor = '#fde68a'; }
  else { sel.style.background = '#f0fdf4'; sel.style.color = '#15803d'; sel.style.borderColor = '#bbf7d0'; }
}

function submitReport() {
  document.querySelector('.page-content').innerHTML = '<div style="text-align:center;padding:60px 20px;"><div style="font-size:56px;margin-bottom:16px;">✅</div><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:8px;">¡Reporte publicado!</h2><p style="font-size:14px;color:var(--muted);max-width:360px;margin:0 auto 24px;">Tu incidente ya es visible para la comunidad SafeSignal de tu zona.</p><a href="reportes-comunidad.html" class="btn-primary" style="width:auto;display:inline-flex;padding:12px 28px;">Ver reportes de la comunidad</a></div>';
}
