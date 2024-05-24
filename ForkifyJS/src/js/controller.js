import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from './model.js'
import RecipeView from './views/RecipeView.js'

import icons from 'url:../img/icons.svg'

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
//f/ HELPER FUNCTIONS


//? /////////////////////////////////////
//f/ SINGLE-RECIPE
const recipesController = async function () {
  try {
    const id = window.location.hash.slice(1)

    RecipeView.renderSpinner()

    //* LOADING RECIPE ///////////////
    await model.loadRecipe(id)

    //* RENDERING RECIPE ////////////////
    RecipeView.render(model.state.recipe)

  } catch (error) {
    console.error(error);
    const errorMsg = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>Error: ${error}</p>
      </div>
    `
    recipeContainer.innerHTML = ''
    recipeContainer.insertAdjacentHTML("beforeend", errorMsg);

  }
};


window.addEventListener('hashchange', recipesController)
window.addEventListener('load', recipesController)
