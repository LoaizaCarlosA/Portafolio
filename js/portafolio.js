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

const divIdioma = document.getElementById("cambiarIdioma");

if (divIdioma) {
  divIdioma.addEventListener("click", () => {
    divIdioma.textContent =
      divIdioma.textContent.trim() === "English" ? "Español" : "English";
  });
}

document.querySelectorAll(".carrusel-clientes").forEach((carrusel) => {
  const slides = carrusel.querySelectorAll(".carrusel-slidee");
  const prevBtn = carrusel.querySelector(".prev");
  const nextBtn = carrusel.querySelector(".next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
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

document.querySelectorAll(".carrusel-logros").forEach((carrusel) => {
  const slides = carrusel.querySelectorAll(".carrusel-slide");
  const prevBtn = carrusel.querySelector(".prev");
  const nextBtn = carrusel.querySelector(".next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
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

let idiomaActual = "es";

document.getElementById("cambiarIdioma").addEventListener("click", () => {
  idiomaActual = idiomaActual === "es" ? "en" : "es";
  document.getElementById("cambiarIdioma").textContent =
    idiomaActual === "es" ? "English" : "Spanish";

  // Cambiar textos con data-es/data-en
  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${idiomaActual}`);
  });

  // Traducciones específicas por ID
  const traducciones = {
    es: {
      contacto: "Contáctame",
      formacion1: "Mi Alma Máter",
      formacion2: "Formación Académica",
      experiencia: "Experiencia Profesional",
      especialidades: "Especialidades",
      empresas: "Empresas que confiaron en mi talento",
      proyectos: "Proyectos Reales",
      logros: "Mis Logros",
      certificados: "Certificados",
      enviar: "Enviar",
    },
    en: {
      contacto: "Contact Me",
      formacion1: "My Alma Mater",
      formacion2: "Academic Background",
      experiencia: "Work Experience",
      especialidades: "Specialties",
      empresas: "Companies that trusted my talent",
      proyectos: "Real Projects",
      logros: "My Achievements",
      certificados: "Certificates",
      enviar: "Send",
    },
  };

  for (let id in traducciones[idiomaActual]) {
    const el = document.getElementById(id);
    if (el) el.textContent = traducciones[idiomaActual][id];
  }

  // Cambiar placeholders
  const inputNombre = document.getElementById("nombre");
  const inputCorreo = document.getElementById("correo");
  const textareaMensaje = document.getElementById("mensaje");

  if (idiomaActual === "en") {
    if (inputNombre) inputNombre.placeholder = "Your name";
    if (inputCorreo) inputCorreo.placeholder = "yourmail@example.com";
    if (textareaMensaje) textareaMensaje.placeholder = "Write your message...";
  } else {
    if (inputNombre) inputNombre.placeholder = "Tu nombre";
    if (inputCorreo) inputCorreo.placeholder = "tucorreo@ejemplo.com";
    if (textareaMensaje) textareaMensaje.placeholder = "Escribe tu mensaje...";
  }
});
