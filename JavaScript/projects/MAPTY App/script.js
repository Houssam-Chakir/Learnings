"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map = L.map("map"), mapEvent;
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude, position);

    map.setView([latitude, longitude], 19);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  },

  function (error) {
    alert(error.message);
  }
);

let coord;
map.on("click", function (e) {
  mapEvent = e;
  const lat = mapEvent.latlng.lat;
  const lng = mapEvent.latlng.lng;
  coord = [lat, lng];

  form.classList.remove('hidden')
  inputDistance.focus();
  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
  //     maxWidth: 200,
  //     minWidth: 200,
  //     autoPanPadding: [10, 10],
  //     autoPan: true,
  //     autoClose: false,
  //     closeOnClick: false,
  //   }))
  //   .setPopupContent(`<h2>Latitude: ${lat}</h2><h2>Longitude: ${lng}</h2>`)
  //   .openPopup();
  //   console.log(L)
  //   form.classList.add('hidden')
  // })
});

form.addEventListener("submit", function (e) {
    console.log(coord)
    e.preventDefault();
    L.marker(coord).addTo(map).bindPopup(L.popup({
      maxWidth: 200,
      minWidth: 200,
      autoPanPadding: [10, 10],
      autoPan: true,
      autoClose: false,
      closeOnClick: false,
    }))
    .setPopupContent(`<h2>Latitude: ${coord[0]}</h2><h2>Longitude: ${coord[1]}</h2>`)
    .openPopup();
    console.log(L)
    form.classList.add('hidden')
  })
