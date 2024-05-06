const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const countryCard = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", countryCard);
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getJSON = function (url) {
  return fetch(`${url}`).then((response) => {
    //throwing error mannually for country not found
    if (!response.ok) throw new Error(`Country not found ${response.status}`);

    return response.json();
  });
};
/**
 * The fetchCountry function fetches data about a specific country from an API and
 * then renders it on the webpage.
 *
 * @param country The `fetchCountry` function is designed to fetch information
 * about a specific country using the `fetch` API. The `country` parameter is the
 * name of the country for which you want to retrieve information. The function
 * constructs a URL with the country name to make the API request and then
 * processes the response
 */
export function fetchCountry(country) {
  //https://restcountries.com/v3.1/name/
  console.log('fetching', country)
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    //
    .then((response) => {
      console.log(response)
      renderCountry(response[0], "neighbour");
    })
    //
    .catch((err) =>
      {console.log(err.message)
      renderError(`Something went wrong(${err.message}). Please try again.`)}
    )
    //
    .finally(() => (countriesContainer.style.opacity = 1));
}
