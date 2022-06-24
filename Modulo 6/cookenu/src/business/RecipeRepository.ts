import { RecipeEditInputDTO, RecipeInputDTO } from "../model/recipe";
import { recipe } from "../types/recipe";

export interface RecipeRepository{
	createRecipe(input:RecipeInputDTO,token:string):Promise<void>
	getRecipeById(id:string,token:string):Promise<recipe>
	editRecipe(input:RecipeEditInputDTO,id:string,token:string):Promise<void>
	deleteRecipe(id:string,token:string):Promise<void>
}