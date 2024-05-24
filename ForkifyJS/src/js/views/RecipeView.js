import icons from "url:../../img/icons.svg";
import fracty from "fracty";

class RecipeView {
  #parentEl = document.querySelector(".recipe");

  //f/ MAIN RECIPE RENDERER FUNCTION //
  render(recipe) {
    const markup = this.#generateMarkup(recipe);
    this.#clear();
    this.#insertHTML(markup);
  }

  //f/ RENDERS LOADING SPINNER //
  renderSpinner() {
    //spinner HTML
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    //Removing Content
    this.#parentEl.innerHTML = "";
    this.#parentEl.insertAdjacentHTML("beforeend", markup);
  }

  //- Private //
  //f/ GENERATES RECIPE MARKUP
  #generateMarkup(recipe) {
    return `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            recipe.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            recipe.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map((ing) => this.#generateIngredients(ing))}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            recipe.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
  }

  //f/ GENERATE MARKUP INGREDIENTS
  #generateIngredients(ing) {
    return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${
            ing.quantity ? fracty(ing?.quantity) : ""
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ing?.unit}</span>
            ${ing?.description}
          </div>
        </li>
      `;
  }

  //f/ CLEARS PARENT ELEMENT CONTENT & HTML //
  #clear() {
    this.#parentEl.innerHTML = "";
  }
  #insertHTML(markup) {
    this.#parentEl.insertAdjacentHTML("beforeend", markup);
  }
}

export default new RecipeView();
