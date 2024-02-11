const headerEl = document.querySelector(".header");
const heroContainer = document.querySelector(".hero-container");
const heroSectionEl = document.querySelector(".section--hero");

const windowHeight = heroContainer.clientHeight;
console.log(windowHeight);

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    headerEl.classList.add("header--show");
  } else {
    headerEl.classList.remove("header--show");
  }

  if (window.scrollY > 0.2 * windowHeight) {
    heroContainer.classList.add("hero-container--stay");
  } else {
    heroContainer.classList.remove("hero-container--stay");
  }
});
