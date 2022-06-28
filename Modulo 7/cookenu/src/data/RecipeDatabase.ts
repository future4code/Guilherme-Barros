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
	getRecipeByUser=async(id:string):Promise<boolean>=>{
		try {
			const result = await RecipeDatabase.connection.raw(`
		SELECT r.id, r.title, r.description, r.createdAt, r.userId, r.userName 
		FROM Cookenusers as c INNER JOIN Recipe r ON c.id = '${id}' AND r.userId = '${id}';
		`)	
		
		
		if (result[0].id !== "") {
			return true
		}else{
			return false
		}
			
		
		}catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	editRecipe=async(id:string,recipe:recipe):Promise<void>=>{
		try {
		await RecipeDatabase.connection("Recipe").update({
			title:recipe.title,
			description:recipe.description,
			createdAt:recipe.createdAt,
			userId:recipe.userId,
			userName:recipe.userName
		}).where({id})
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	deleteRecipe=async (id:string):Promise<void> => {
		try {
			await RecipeDatabase.connection("Recipe").where({id}).del()
		}  catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
}