let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides ? slides.children.length : 0;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

const divIdioma = document.getElementById('cambiarIdioma');

if (divIdioma) {
  divIdioma.addEventListener('click', () => {
    divIdioma.textContent = divIdioma.textContent.trim() === 'Inglés' ? 'Español' : 'Inglés';
  });
}
