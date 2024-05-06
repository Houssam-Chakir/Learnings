const countriesContainer = document.querySelector(".countries");


const errorHandler = (msg) => {
  countriesContainer.insertAdjacentText("beforeEnd", msg);
};

const getJSON = async function (lat, lang) {
  console.log("getJSON", lat, lang);

  return fetch(
    `https://geocode.xyz/${lat},${lang}?geoit=json&auth=735945790511231885936x43790`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Something went wrong ${response.status}`);
    }
    console.log(lat, lang)
    return response.json();
  });
};


const getPosition = async function () {
  const position = await new Promise(function (resolve, reject) {
    return navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("getPosition", longitude, latitude);
  return { latitude, longitude };
};


/**
 * Retrieves the country name based on the provided latitude and longitude coordinates.
 *
 * @param {number} lat - The latitude coordinate.
 * @param {number} lang - The longitude coordinate.
 * @returns {Promise<string>} - A promise that resolves to the country name, or throws an error if the coordinates are incorrect or there is an issue with the request.
 */
/**
 * This function gets the user's location using the browser's
 * geolocation API and then uses the latitude and longitude
 * coordinates to retrieve the user's country from an external API.
 * The function returns a promise that resolves to the country name
 * or throws an error if the coordinates are incorrect or there
 * is an issue with the request.
 */
export const whereAmI = function () {
  // Step 1: Get the user's geolocation coordinates
  return (
    getPosition()
      // Step 2: Extract latitude and longitude from the coordinates
      .then((coords) => {
        const { latitude, longitude } = coords;
        return { latitude, longitude };
      })
      // Step 3: Use the coordinates to get the country name
      .then(({ latitude, longitude }) => getJSON(latitude, longitude))
      // Step 4: Check that the API returned a country name
      .then((data) => {
        // If the API did not return a country name, throw an error
        if (!data.country) {
          throw new Error(`Incorrect coordinates`);
        }
        // Log the country name and city to the console
        console.log("data.country", data.country);
        console.log(`you are in ${data.city} in ${data.country}`);
        // Return the country name
        return data.country;
      })
      // Step 5: Handle any errors that might occur
      .catch((error) => {
        // If there was an error, log it to the console
        errorHandler(`OOPS! ${error.message}`);
        // Return nothing, which will be passed to the .finally() function below
        return;
      })
      // Step 6: Finally, return the data from the promise (if there was no error)
      .finally((data) => data)
  );
};
