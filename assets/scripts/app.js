document.addEventListener('DOMContentLoaded', function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.sidebar__link[href]').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  var user = JSON.parse(localStorage.getItem('safesignalUser') || 'null');
  if (user) {
    var nameEl = document.getElementById('sidebarUserName');
    var roleEl = document.getElementById('sidebarUserRole');
    var avatarEl = document.getElementById('sidebarAvatar');
    if (nameEl) nameEl.textContent = user.nombre || 'Usuario';
    if (roleEl) roleEl.textContent = user.distrito || 'Lima, PE';
    if (avatarEl) avatarEl.textContent = (user.nombre || 'U')[0].toUpperCase();
  }

  var logoutBtn = document.getElementById('btnLogout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.removeItem('safesignalUser');
      window.location.href = 'login.html';
    });
  }

  document.querySelectorAll('[data-modal]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var target = document.getElementById(trigger.dataset.modal);
      if (target) target.style.display = 'flex';
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modal = btn.closest('.modal-overlay');
      if (modal) modal.style.display = 'none';
    });
  });
});
