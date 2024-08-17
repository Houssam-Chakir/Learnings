import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import RecipeView from "./views/RecipeView.js";
import ResultsView from "./views/resultsView.js";
import PaginationView from "./views/paginationView.js";

import { clear, errorMarkupGenerator } from "./helpers.js";
import { resultsArea } from "./config.js";

if (model.hot) {
  module.hot.accept();
}

class RecipesController {
  id;
  pages;
  constructor() {
    RecipeView.addHandlerRender(this.handleRecipe);
    ResultsView.addHandlerResults(this.handleQueryResults.bind(this));
    PaginationView.addHandlerPages(this.handlePages.bind(this));
  }

  //f/ RECIPE RENDERER
  async handleRecipe() {
    try {
      this.id =
        window.location.hash.slice(1) || "#664c8f193e7aa067e94e8535".slice(1);

      RecipeView.renderSpinner();

      //* LOADING RECIPE ///////////////
      await model.loadRecipe(this.id);

      //* RENDERING RECIPE ////////////////
      RecipeView.render(model.state.recipe);
    } catch (error) {
      console.error(error);
      RecipeView.renderError(error);
    }
  }

  async handleQueryResults(query) {
    try {
      if (!query) return;

      ResultsView.renderSpinner();

      await model.loadSearchResults(query);
      const results = model.state.search.results;
      this.pages = PaginationView.devideResults(results);
      this.handlePageResults(this.pages);
    } catch (error) {
      console.error(error);
      RecipeView.renderError(error);
    }
  }
  async handlePageResults(pages, index = 0) {
    try {
      clear(resultsArea);
      console.log("pages: ", pages);

      console.log("pages[index]: ", index, pages[index]);
      ResultsView.renderResults(pages[index]);
      PaginationView.renderButtons(index, pages.length);

      ResultsView.clearInput();
    } catch (error) {
      console.error(error);
      RecipeView.renderError(error);
    }
  }

  handlePages(event) {
    let index = event.target.id;

    console.log("index: ", index);

    this.handlePageResults(this.pages, index - 1)
  }
}

export default new RecipesController();

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886
//f/ HELPER FUNCTIONS

//? /////////////////////////////////////
//f/ SINGLE-RECIPE
// const recipesController = async function () {
//   try {
//     const id = window.location.hash.slice(1);

//     RecipeView.renderSpinner();

//     //* LOADING RECIPE ///////////////
//     await model.loadRecipe(id);

//     //* RENDERING RECIPE ////////////////
//     RecipeView.render(model.state.recipe);
//   } catch (error) {
//     console.error(error);
//     errorMarkupGenerator(error);
//   }
// };

// const init = () => {
//   RecipeView.addHandlerRender(recipesController)
// }
// init()
