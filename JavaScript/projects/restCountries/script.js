"use strict";

import xmlHandler from "./xml.js";
import { fetchCountry } from "./promises.js";
import { whereAmI } from "./geocodeAPI.js";
import createImage from "./imgLoader.js";
import fetchCountryAsync from "./asyncFetch.js";

const btn = document.querySelector(".btn-country");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// xmlHandler('morocco', countriesContainer)
// xmlHandler('palestine', countriesContainer)

btn.addEventListener("click", function () {
  fetchCountry("morocco");
});

btn3.addEventListener("click", function () {
  fetchCountryAsync("morocco");
  console.log('async fetch')
});

// This button is going to get the user's location using the Geolocation API
// and then use the location to retrieve information about the country they are in.
// The promise chain should resolve with the country name, and then pass that
// value into the `fetchCountry` function to display the country information on the page.
// If there is an error getting the location or retrieving the country information,
// log the error message to the console.
btn2.addEventListener("click", function () {
  // Function that retrieves the user's location and returns a promise that resolves
  // to the country name.
  whereAmI()
    // On success, log the country name to the console and then pass the country name
    // to the `fetchCountry` function to display the country information on the page.
    .then((data) => {
      console.log("data", data);
      return fetchCountry(data);
    })
    // On error, log the error message to the console.
    .catch((error) => console.log(error.message));
});

navigator.geolocation.getCurrentPosition((position) => console.log(position));

//Images part

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`waited for ${time} seconds`);
      resolve();
    }, time * 1000);
  });
};

let currentImage;

createImage("./img/img-1.jpg")
  .then((img) => {
    console.log(img.src);
    return img;
  })
  .then((img) => {
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return wait(2)
  })
  .then(() => createImage("./img/img-2.jpg"))
  .catch((error) => console.error(error));
