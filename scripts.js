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

// Array de testimonios
const testimonios = [
  {
    nombre: "Juan Pérez",
    descripcion: "Cliente satisfecho",
    imagen: "https://via.placeholder.com/100",
    texto: "Excelente servicio, siempre atentos a mis necesidades. Me ayudaron a encontrar el mejor seguro para mi auto. ¡Totalmente recomendados!"
  },
  {
    nombre: "Maria López",
    descripcion: "Cliente satisfecha",
    imagen: "https://via.placeholder.com/100",
    texto: "Gracias a su asesoramiento, pude asegurar mi casa con una excelente cobertura. Estoy tranquilo sabiendo que está protegida."
  },
  {
    nombre: "Carlos Díaz",
    descripcion: "Cliente satisfecho",
    imagen: "https://via.placeholder.com/100",
    texto: "Me ayudaron a elegir el seguro de moto perfecto. Muy profesionales y con gran conocimiento en el área."
  }
];

// Renderizador de testimonios
function mostrarTestimonios() {
  const contenedor = document.getElementById('testimonial-cards');

  testimonios.forEach(testimonio => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    card.innerHTML = `
      <img src="${testimonio.imagen}" alt="${testimonio.nombre}">
      <p>"${testimonio.texto}"</p>
      <h3>${testimonio.nombre}</h3>
      <p>${testimonio.descripcion}</p>
    `;

    contenedor.appendChild(card);
  });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', mostrarTestimonios);
