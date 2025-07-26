//Smooth scrolling
document.querySelectorAll('nav.sidebar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//Menu closes mobile
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

//Detectar dispositivo y mostrar el boton
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.addEventListener('DOMContentLoaded', () => {
  const btnCall = document.querySelector('.btn-call');

  if (isMobile()) {
    btnCall.style.display = 'inline-block';
    btnWhatsApp.style.display = 'none';
  } 
});
