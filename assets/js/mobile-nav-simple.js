// Simple Mobile Navigation Test
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-items');
  
  if (toggle && menu) {
    toggle.onclick = function() {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    };
  }
});
