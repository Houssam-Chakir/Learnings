import icons from "url:../../img/icons.svg";
import { errorMarkupGenerator } from "../helpers";


export default class View {

  // RENDERS LOADING SPINNER //
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
    this._parentEl.innerHTML = "";
    //adding content
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  // ERROR HANDLING
  renderError(error) {
    errorMarkupGenerator(error);
  }


  _insertHTML(markup, target) {
    target.insertAdjacentHTML("beforeend", markup);
  }


}
