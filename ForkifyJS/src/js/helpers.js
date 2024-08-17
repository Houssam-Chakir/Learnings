import { TIMEOUT_SEC, recipeContainer } from "./config";
import icons from "url:../img/icons.svg";

//f/ FETCH RESPONSE and TURN IT TO JSON
//? URL: api url for the desired data
export const getJSON = async function (url) {
  try {
    // fetching from API
    const res = await fetch(url);
    // response to JSON
    const data = await res.json();
    
    // error handling invalid id
    if (!res.ok) throw new Error(`⚠️ Could not get recipe: ${data.message}`);
    //
    return data;
  } catch (error) {
    throw error;
  }
};

//f/ DATA FETCH HANDLER
export const fetchData = async (url) => {
  return await Promise.race([
    getJSON(url),
    fetchTimeout(TIMEOUT_SEC)
  ])
}

//f/ ERROR MSG MARKUP GENERATOR
export const errorMarkupGenerator = function (error) {
  const errorMsg = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${error}</p>
      </div>
    `;

  recipeContainer.innerHTML = "";
  recipeContainer.insertAdjacentHTML("beforeend", errorMsg);
};

//f/ FETCH TIME-OUT
export const fetchTimeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//f/ CLEARS PARENT ELEMENT CONTENT & HTML //
export const clear = function(target) {
  target.innerHTML = "";
}
