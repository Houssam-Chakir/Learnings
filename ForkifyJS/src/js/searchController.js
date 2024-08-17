import { fetchData } from "./helpers";
import { API_URL, API_KEY, TIMEOUT_SEC, searchBar } from "./config";
import RecipeView from "./views/RecipeView";

class SearchController {
  searchInput = document.querySelector('.search__field')
  constructor() {
    RecipeView.addHandlerSearch(this.loadSearchResults)
  }
  async loadSearchResults() {
    try {
      const keyWord = this.searchInput.value
      console.log('keyWord: ', keyWord);
      //https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
      const data = await fetchData(`${API_URL}/?search=${keyWord}?key=${API_KEY}`)
      console.log('data: ', data);

    } catch (error) {
      throw error
    }
  }
}

