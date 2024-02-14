const headerEl = document.querySelector(".header");
const headerNavEl = document.querySelector(".header__nav");
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
const resumeEl = document.querySelector(".resume");
const burgerBtn = document.querySelector(".burger__btn");

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  console.log(heroSectionEl.clientHeight);
  // Showing header if scrolled
  if (window.scrollY > 0) {
    headerEl.classList.add("header--show");
  } else {
    headerEl.classList.remove("header--show");
  }

  // Managing hero section's position when scrolled over
  if (window.scrollY >= 0.4 * window.innerHeight) {
    heroContainer.classList.add("hero-container--stay");
  } else {
    heroContainer.classList.remove("hero-container--stay");
  }
});

burgerBtn.addEventListener("click", (_e) => {
  headerNavEl.classList.toggle("nav-show");
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

const aboutContentFullObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      aboutImgBox.classList.add("show");
    } else if (
      !entry.isIntersecting &&
      window.scrollY < heroSectionEl.clientHeight
    ) {
      aboutImgBox.classList.remove("show");
    }
  },
  {
    threshold: 1,
  }
);

const resumeElObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      aboutImgBox.classList.add("stay");
    } else {
      window.scrollY <
        aboutSectionEl.clientHeight + heroSectionEl.clientHeight &&
        aboutImgBox.classList.remove("stay");
    }
  },
  {
    rootMargin: "-80px",
  }
);

aboutContentObserver.observe(aboutContent);
aboutContentFullObserver.observe(aboutContent);
resumeElObserver.observe(resumeEl);
