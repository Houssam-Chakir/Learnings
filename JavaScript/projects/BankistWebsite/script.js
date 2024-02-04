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
  if(e.target.classList.contains("nav__link")) {
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
