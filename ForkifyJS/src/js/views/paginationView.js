import { btnNextPage, btnPerviousPage, paginationSection } from "../config";
import { clear } from "../helpers";

class PaginationView {
  devideResults(results) {
    let count = results.length;
    let pages = [];
    let pageSize = 15;
    let from = 0;
    while (count >= 0) {
      let page = [...results.slice(from, (from += pageSize))];
      page.length === 0 ? pages : pages.push(page);
      count -= 15;
    }
    return pages;
  }

  renderButtons(index, length) {
    const btnPrevious = `
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${index}</span>
    `;
    const btnNext = `
      <span>Page ${index + 2}</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    `;
    const markup = `
      <button id='${index}' class="btn--inline pagination__btn--prev">
        ${index === 0 ? "" : btnPrevious}
      </button>
      <button id='${index + 2}' class="btn--inline pagination__btn--next">
        ${index >= length ? "" : btnNext}
      </button>
    `;
    clear(paginationSection);
    paginationSection.insertAdjacentHTML("afterbegin", markup);
  }

  //event handler
  
}

export default new PaginationView();
