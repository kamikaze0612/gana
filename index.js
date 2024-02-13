const headerEl = document.querySelector(".header");
const heroContainer = document.querySelector(".hero-container");
const heroSectionEl = document.querySelector(".section--hero");
const aboutSectionEl = document.querySelector(".section--about");
const aboutImgBox = document.querySelector(".about__img-box");
const aboutContent = document.querySelector(".about__content");
const aboutDetails = document.querySelector(".about__details");
const projectsProjectsEl = document.querySelector(".section--projects");
const skillsBox = document.getElementById("skills");
const hobbiesBox = document.getElementById("hobbies");
const allLinks = document.querySelectorAll("a:link");

const windowHeight = heroContainer.clientHeight;

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    headerEl.classList.add("header--show");
  } else {
    headerEl.classList.remove("header--show");
  }

  if (
    window.scrollY > heroSectionEl.clientHeight - headerEl.clientHeight &&
    window.scrollY <
      heroSectionEl.clientHeight +
        aboutSectionEl.clientHeight -
        0.6 * windowHeight
  ) {
    aboutImgBox.classList.add("show");
    aboutImgBox.style.top = `${
      window.scrollY - heroSectionEl.clientHeight + 320
    }px`;
  } else {
    aboutImgBox.style.position = "absolute";
  }

  if (window.scrollY > 0.4 * windowHeight) {
    heroContainer.classList.add("hero-container--stay");
  } else {
    heroContainer.classList.remove("hero-container--stay");
  }
});

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const aboutContentObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      aboutDetails.classList.add("show");
      aboutContent.classList.remove("show");
    } else {
      aboutDetails.classList.remove("show");
      aboutContent.classList.add("show");
    }
  },
  {
    threshold: 0.5,
  }
);

console.log("Hero height: ", heroSectionEl.clientHeight);

aboutContentObserver.observe(aboutContent);
