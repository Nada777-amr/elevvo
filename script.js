const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  sidebar.classList.toggle('open'); // For mobile support
});
