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

let coord;
let count = 0;
//Classes

class App {
  #map;
  #mapEvent;
  workouts = [];
  constructor() {
    // this.workouts = workouts;
    // this.map = map;

    this._getPosition();

    this._loadWorkouts();


    //Event Listiners
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._newWorkout();
      //this._putMarker(); //TODO
    });

    inputType.addEventListener("change", this._toggleElevationField.bind(this));
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function (error) {
        alert(error.message);
      }
    );
    console.log('workouts marker loader', this.workouts)
    this.workouts.forEach(w => {
      console.log('marker loader', w)
      this._renderWorkoutMarker(w);
    });
  }

  /**
   * Loads the map at the provided coordinates
   * @param {Object} position - Object containing latitude and longitude coordinates
   * Sets map view to provided coordinates
   * Adds tile layer to map
   * Adds marker to map at coordinates
   */
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log("_loadPosition", position);

    this.#map = L.map("map").setView([latitude, longitude], 19);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker([latitude, longitude])
      .addTo(this.#map)
      .bindPopup("Current location")
      .openPopup();



    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(e) {
    this.#mapEvent = e;

    const lat = this.#mapEvent.latlng.lat;
    const lng = this.#mapEvent.latlng.lng;
    coord = [lat, lng];
    //inputType.value = inputType.lastChild
    inputElevation.value =
      inputDuration.value =
      inputDistance.value =
      inputCadence.value =
        "";
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(coord) {
    //valid data?
    const validInputs = (...inputs) => {
      inputs.forEach((input) => {
        if (!Number.isFinite(input)) {
          return alert(`${input} is not a valid positive number`);
        }
      });
    };
    const positiveInput = (...inputs) => {
      inputs.forEach((input) => {
        if (input < 0)
          return alert("some in puts should be always greater than 0");
      });
    };

    //takes info from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const {lat, lng} = this.#mapEvent.latlng;
    let workout;

    //creates the specific workout class
    if (type === "running") {
      const cadence = +inputCadence.value;
      validInputs(distance, duration, cadence);
      positiveInput(distance, duration, cadence);
      //coords, duration, distance, codence
      workout = new Running([lat, lng], duration, distance, cadence);
    }
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      validInputs(distance, duration, elevation);
      positiveInput(distance, duration);
      workout = new Running([lat, lng], duration, distance, elevation);
    }

    //stores it in an array
    this.workouts.push(workout);

    console.log(workout)
    console.log(coord);

    //render workout marker
    this._renderWorkoutMarker(workout)
    this._renderWorkout(workout)
    this._saveWorkouts()
  }

  //Others
  _getTime() {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    const now = new Date()
    const nowGB = new Intl.DateTimeFormat('en-GB', options).format(now);

    return nowGB
  }

  _renderWorkoutMarker(workout) {


    L.marker(coord)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 200,
          minWidth: 200,
          autoPanPadding: [10, 10],
          autoPan: true,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `<h2>${workout.type} on ${this._getTime()}</h2>`
      )
      .openPopup();
    console.log(L);
    form.classList.add("hidden");
  }

  _renderWorkout(workout) {

    const workoutCard = `
      <li class="workout workout--running" data-id="${workout.id}">
        <h2 class="workout__title">Running on April 14</h2>
        <div class="workout__details">
          <span class="workout__icon">🏃‍♂️</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">${(workout.type === 'running') ? '🦶🏼' : '⛰'}</span>
          <span class="workout__value">${(workout.type === 'running') ? workout.cadence : workout.elevation}</span>
          <span class="workout__unit">${(workout.type === 'running') ? 'spm' : 'm'}</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('beforeend', workoutCard)


  }

  _saveWorkouts() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  _loadWorkouts() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log('data', data)

    if(!data) return;

    data.forEach(w => {
      this._renderWorkout(w)
    })
  }

}

const app = new App();

class Workout {
  #id;
  constructor(coords, duration, distance) {
    this.#id = count++;
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
    this.date = new Date();
  }
}

class Running extends Workout {
  type = 'running'
  constructor(coords, duration, distance, codence) {
    super(coords, duration, distance);
    this.codence = codence;
    this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling'
  constructor(coords, duration, distance, elevation) {
    super(duration, coords, distance);
    this.elevation = elevation;
    this.calcSpeed;
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

//testing classes
const run1 = new Running([22, 34], 30, 5, 12);
const cycling1 = new Cycling([23, 34], 35, 5, 12);
console.log(run1, cycling1);
console.log("input type", inputType);

/**
 * Uses the browser's geolocation API to get the user's current location,
 * set the map view to that location, add a tile layer, and add a marker there.
 * Handles both success and error callbacks from getCurrentPosition.
 */
// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     const { latitude, longitude } = position.coords;
//     console.log(latitude, longitude, position);

//     map.setView([latitude, longitude], 19);

//     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     L.marker([latitude, longitude])
//       .addTo(map)
//       .bindPopup("Current location")
//       .openPopup();
//   },

//   function (error) {
//     alert(error.message);
//   }
// );

/**
 * Adds click handler to map that gets clicked coordinates,
 * shows form, and sets global coord variable.
 */
// map.on("click", function (e) {
//   mapEvent = e;
//   const lat = mapEvent.latlng.lat;
//   const lng = mapEvent.latlng.lng;
//   coord = [lat, lng];

//   App._showForm
// });

/**
 * Adds an event listener for the form submission
 * that gets the clicked coordinates, creates a marker at that point,
 * sets the popup content to show the latitude and longitude,
 * opens the popup, and hides the form.
 */
