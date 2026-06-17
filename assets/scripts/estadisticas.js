var days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
var vals = [2, 3, 4, 3, 7, 9, 5];
var max = Math.max.apply(null, vals);
var chart = document.getElementById('weekChart');
var labels = document.getElementById('weekLabels');

days.forEach(function (d, i) {
  var col = document.createElement('div');
  col.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;';
  var bar = document.createElement('div');
  bar.className = 'mini-bar';
  bar.style.cssText = 'width:100%;background:' + (vals[i] >= 7 ? '#ef4444' : vals[i] >= 4 ? '#f59e0b' : '#22c55e') + ';height:' + (vals[i] / max * 100) + '%;border-radius:4px 4px 0 0;';
  col.appendChild(bar);
  chart.appendChild(col);

  var lbl = document.createElement('div');
  lbl.className = 'mini-lbl';
  lbl.style = 'flex:1;text-align:center;font-size:10px;color:var(--muted);';
  lbl.textContent = d;
  labels.appendChild(lbl);
});
