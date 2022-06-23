import { recipe } from './../types/recipe';
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from '../error/customError';

export class RecipeDatabase extends BaseDatabase {
	public createRecipe=async(recipe:recipe):Promise<void>=>{
		try {
			await RecipeDatabase.connection.insert({
				id:recipe.id,
				title:recipe.title,
				description:recipe.description,
				createdAt:recipe.createdAt,
				userId:recipe.userId,
				userName:recipe.userName
			}).into('Recipe')
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	getRecipeById=async (id:string):Promise<recipe> => {
		try {
		const result=await RecipeDatabase.connection("Recipe").
		where({id})
		return result[0]	
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
}