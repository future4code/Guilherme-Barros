import { recipe } from "../types/recipe";

export interface RecipeRepository{
	createRecipe(recipe:recipe,token:string):Promise<void>
	getRecipeById(id:string,token:string):Promise<recipe>
}