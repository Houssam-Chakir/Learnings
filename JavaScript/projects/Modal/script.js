"use strict";
//- VARIABLES ////////////////////////////////////////////

const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//- FUNCTIONS ////////////////////////////////////////////

const showOverlay = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalWindow = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//- EVENT LISTENERES /////////////////////////////////////

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", showOverlay);
}

closeModal.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeModalWindow();
});
