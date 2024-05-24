import { API_URL, API_KEY } from "./config";

export const state = {
  recipe: {},

}

export const loadRecipe = async function(id) {
  try {
    //f/ FETCHING RECIPE
    const res = await fetch(
      `${API_URL}/${id}?key=${API_KEY}`
    );
    const data = await res.json();
    //f/ error handling invalid id
    if (!res.ok) throw new Error(`Could not get recipe: ${data.message}`);
    //console.log("data: ", data);

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
    console.log('state.recipe: ', state.recipe);
  } catch(error) {
    alert('error')
  }
}
