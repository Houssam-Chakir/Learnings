export const state = {
  recipe: {},

}

export const loadRecipe = async function() {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=4f11fab4-0e38-4b01-90fa-7a7952464411`
  );
  const data = await res.json();
  //error handling invalid id
  if (!res.ok) throw new Error(`Could not get recipe: ${data.message}`);
  //console.log("data: ", data);

  //reformatting data keys
  let { recipe } = data.data;
  recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };
  console.log("recipe: ", recipe);
}
