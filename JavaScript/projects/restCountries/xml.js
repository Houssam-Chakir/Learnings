

/**
 * The `renderCountry` function generates HTML markup for displaying country
 * information and appends it to a specified container element.
 *
 * @param data The `data` parameter in the `renderCountry` function is an object
 * containing information about a specific country. This object typically includes
 * properties such as `flags` (containing the flag image URL), `name` (containing
 * the country's name), `region` (containing the region where
 * @param container The `container` parameter in the `renderCountry` function is
 * the element where the country card HTML will be inserted. It is the DOM element
 * that will contain the rendered country information.
 */
const renderCountry = function (data, container, className = '') {
  const countryCard = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>POP people</p>
        <p class="country__row"><span>🗣️</span>LANG</p>
        <p class="country__row"><span>💰</span>CUR</p>
      </div>
    </article>
  `;

  container.insertAdjacentHTML("beforeend", countryCard);
};






const xmlHandler = (country, container) => {
  const request = new XMLHttpRequest();

  // creating request then sending it
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  //after loading request results
  request.addEventListener("load", function () {
    //parsing to JSON // this keyword refers to request
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data, container);

    //getting code from country border
    const neighbour = data.borders?.[0];
    if(!neighbour) return;

    //AJAX call country 2 with code
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
    request2.send();

    request2.addEventListener("load", function () {
      //parsing to JSON // this keyword refers to request
      const [data2] = JSON.parse(this.responseText);

      renderCountry(data2, container, 'neighbour');
    });
  });
};

export default xmlHandler;
