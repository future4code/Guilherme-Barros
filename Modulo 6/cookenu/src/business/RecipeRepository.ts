import { recipe } from "../types/recipe";

export interface RecipeRepository{
	createRecipe(recipe:recipe):Promise<string>
}