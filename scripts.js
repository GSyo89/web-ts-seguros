// Función para alternar el modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Guardar preferencia
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('modoOscuro', 'activo');
  } else {
    localStorage.setItem('modoOscuro', 'inactivo');
  }
}

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  // Verificar preferencia guardada
  if (localStorage.getItem('modoOscuro') === 'activo') {
    document.body.classList.add('dark-mode');
  }

  // Conectar el botón al evento
  const btnModoOscuro = document.getElementById('dark-mode-toggle');
  if (btnModoOscuro) {
    btnModoOscuro.addEventListener('click', toggleDarkMode);
  }
});

// hidden navbar 
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('#main-header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.classList.remove('hidden-navbar');
    } else {
      navbar.classList.add('hidden-navbar');
    }
  });
});
