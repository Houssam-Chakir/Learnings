"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Open modal window
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//smooth scrolling
const scrollToBtn = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const navLinks = document.querySelectorAll(".nav__link");
console.log(scrollToBtn, section1);

scrollToBtn.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//scroll to section
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const section = document.querySelector(e.target.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

//random RGB color generator
// const randomRGB = () => {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;
// };

//EVENT BUBBLING
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.color = randomRGB();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomRGB();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomRGB();
// });

//Tabs component functionality
const operationsSection = document.querySelector(".operations");
const contentTabs = document.querySelectorAll(".operations__content");
const tabContainer = document.querySelector(".operations__tab-container");
const opsTabs = document.querySelectorAll(".operations__tab");

tabContainer.addEventListener("click", function (e) {
  const target = e.target.closest(".operations__tab");
  const content = document.querySelector(
    `.operations__content--${target.dataset.tab}`
  );
  if (!target) return;

  opsTabs.forEach((el) => {
    el.classList.remove("operations__tab--active");
  });
  contentTabs.forEach((el) => {
    el.classList.remove("operations__content--active");
  });

  target.classList.add("operations__tab--active");
  content.classList.add("operations__content--active");
});

//sticky nav bar
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.classList.remove("sticky");
      } else {
        nav.classList.add("sticky");
      }
    });
  },
  {
    threshold: 0,
  }
);

observer.observe(header);

// section reveal
const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "-200px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));

//Lazy loading Images
const images = document.querySelectorAll(".features__img");

const imagesObserver = new IntersectionObserver(
  (imgs, observer) => {
    imgs.forEach((img) => {
      if (img.isIntersecting) {
        console.log("observed img");

        img.target.src = img.target.dataset.src;
        img.target.addEventListener("load", function () {
          img.target.classList.remove("lazy-img");
        });

        observer.unobserve(img.target);
      }
    });
  },
  {
    rootMargin: "200px",
  }
);

images.forEach((image) => {
  imagesObserver.observe(image);
});

// Slides component
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const leftSliderBtn = document.querySelector(".slider__btn--left");
const rightSliderBtn = document.querySelector(".slider__btn--right");

let count = 0
const maxSlide = slides.length
console.log(-maxSlide)

//slides handler to move slides
const slidesHandler = (slides) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100*(i+count)}%)`;
  })
}
slidesHandler(slides)

//buttons event listeners
leftSliderBtn.addEventListener('click', () => {
  if (count === 0) return
  else count++;

  slidesHandler(slides);

})

rightSliderBtn.addEventListener('click', () => {
  if (count === - maxSlide + 1) count = 0
  else count--;

  slidesHandler(slides);
})
