import icons from "url:../../img/icons.svg";
import { resultsArea, searchBar, searchInput } from "../config";
import View from "./view";

class ResultsView extends View {
  _parentEl = resultsArea;

  // RENDER Result
  renderResults(recipes) {
    console.log('recipes: ', recipes);
    recipes.forEach((recipe) => {
      const markup = this.#generateResultMarkup(recipe);
      this.#insertHTML(markup, resultsArea);
    });
  }

  // GENERATE Results markup
  #generateResultMarkup(recipe) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.image}" alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
            <p class="preview__publisher">${recipe.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
  }

  // Clearing search input
  clearInput() {
    searchInput.value = "";
  }
  #insertHTML(markup, target) {
    target.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerResults(handler) {
    searchBar.addEventListener("submit", () => handler(searchInput.value));
  }
}

export default new ResultsView();
