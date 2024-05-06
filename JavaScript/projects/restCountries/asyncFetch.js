
const countriesContainer = document.querySelector(".countries");


//* HELPER FUNCTIONS //////////////////////////////////////////////////////////

const getPosition = async function () {
  const position = await new Promise(function (resolve, reject) {
    return navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const {latitude, longitude} = position.coords
  return { latitude, longitude };
};

const getCountry = async function (position) {
  // gets country based o coords
  const result = await fetch(`https://geocode.xyz/${position.latitude},${position.longitude}?geoit=json&auth=735945790511231885936x43790`)
  if(!result) throw new Error(`Something went wrong`);
  // turns result to json
  const data = await result.json()
  // gets country info using country name
  const country = await fetch(`https://restcountries.com/v3.1/name/${data.country}`)
  return country.json()
};

const renderCountry = function (data, className = "") {
  const countryCard = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags?.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name?.common}</h3>
        <h4 class="country__region">${data?.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data?.languages}</p>
        <p class="country__row"><span>💰</span>${data?.currencies?.[0]}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", countryCard);
};

//* MAIN FUNCTION /////////////////////////////////////////////////////////////

export default async function fetchCountryAsync(country) {
  const position = await getPosition()
  const result = await getCountry(position)
  renderCountry(result[0])
};
