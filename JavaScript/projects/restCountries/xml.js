const xmlHandler = (country, container) => {
  const request = new XMLHttpRequest();
  let data;
  // creating request then sending it
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  //after loading request results
  request.addEventListener("load", function () {
    //parsing to JSON // this keyword refers to request
    [data] = JSON.parse(this.responseText);
    console.log(data);
    const countryCard = `
    <article class="country">
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

    container.insertAdjacentHTML('beforeend',countryCard)
  });


};

export default xmlHandler;
