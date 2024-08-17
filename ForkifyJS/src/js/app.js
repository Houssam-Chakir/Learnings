import RecipesController from "./controller";
import RecipeModel from "./model";
import RecipeView from "./views/RecipeView";


document.addEventListener('DOMContentLoaded', () => {
  const recipeModel = new RecipeModel()
  const recipeController = new RecipesController(recipeModel)
  const recipeView = new RecipeView(recipeModel)
});
