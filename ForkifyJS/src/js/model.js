import { API_URL, API_KEY, TIMEOUT_SEC } from "./config";
import { getJSON, fetchTimeout, fetchData } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    //f/ FETCHING RECIPE DATA from API
    const data = await fetchData(`${API_URL}${id}?key=${API_KEY}`);
    console.log("data: ", data);

    //f/ reformatting data keys
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log("state.recipe: ", state.recipe);
  } catch (error) {
    throw error;
  }
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    //reseting
    state.search.results = [];

    //https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
    const data = await fetchData(`${API_URL}?search=${query}?key=${API_KEY}`);


    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image_url,
        publisher: recipe.publisher,
      };
    });
  } catch (error) {
    throw error;
  }
};
