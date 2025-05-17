// let currentIndex = 0;
// const slides = document.getElementById("slides");
// const totalSlides = slides ? slides.children.length : 0;

// function updateSlide() {
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateSlide();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   updateSlide();
// }

const divIdioma = document.getElementById('cambiarIdioma');

if (divIdioma) {
  divIdioma.addEventListener('click', () => {
    divIdioma.textContent = divIdioma.textContent.trim() === 'Inglés' ? 'Español' : 'Inglés';
  });
}


document.querySelectorAll('.carrusel-clientes').forEach((carrusel) => {
  const slides = carrusel.querySelectorAll('.carrusel-slidee');
  const prevBtn = carrusel.querySelector('.prev');
  const nextBtn = carrusel.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Carrusel automático cada 5 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);

  // Mostrar la primera slide al cargar
  showSlide(currentIndex);
});

document.querySelectorAll('.carrusel-logros').forEach((carrusel) => {
  const slides = carrusel.querySelectorAll('.carrusel-slide');
  const prevBtn = carrusel.querySelector('.prev');
  const nextBtn = carrusel.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Carrusel automático cada 5 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);

  // Mostrar la primera slide al cargar
  showSlide(currentIndex);
});