const miImagen = document.getElementById("miImagen");
const introText = document.querySelector(".intro-text");
const header = document.querySelector("header");
const fadeSections = document.querySelectorAll(".fade-section");
const sideLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Fade portada
  const maxScroll = 400;
  let opacity = 1 - scrollY / maxScroll;
  if (opacity < 0) opacity = 0;

  const translateY = scrollY * 0.15;
  miImagen.style.opacity = opacity;
  miImagen.style.transform = `translateY(-${translateY}px)`;
  introText.style.opacity = opacity;
  introText.style.transform = `translateY(-${translateY}px)`;

  // Header visible
  if (opacity < 0.05) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }

  // Fade-in secciones
  fadeSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("fade-in");
    }
  });

  // Navegación activa
  document.querySelectorAll(".section").forEach((sec, i) => {
    const rect = sec.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      sideLinks.forEach((link) => link.classList.remove("active"));
      sideLinks[i].classList.add("active");
    }
  });
});
