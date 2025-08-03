// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-items');
  
  if (navToggle && navItems) {
    navToggle.addEventListener('click', function() {
      // Toggle active class on button and menu
      navToggle.classList.toggle('active');
      navItems.classList.toggle('active');
      
      // Update aria-expanded for accessibility
      const isExpanded = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded.toString());
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navToggle.contains(event.target) || navItems.contains(event.target);
      
      if (!isClickInsideNav && navItems.classList.contains('active')) {
        navToggle.classList.remove('active');
        navItems.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking on a nav item (mobile)
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navToggle.classList.remove('active');
          navItems.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
    
    // Close menu on window resize if mobile menu is open
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navItems.classList.contains('active')) {
        navToggle.classList.remove('active');
        navItems.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
