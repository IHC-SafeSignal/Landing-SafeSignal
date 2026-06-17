document.getElementById('btnLogout').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('logoutModal').style.display = 'flex';
});
document.getElementById('confirmLogout').addEventListener('click', function () {
  localStorage.removeItem('safesignalUser');
  window.location.href = 'login.html';
});
