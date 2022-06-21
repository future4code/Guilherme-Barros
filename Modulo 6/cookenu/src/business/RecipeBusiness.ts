import { HashManager } from './../service/hashManager';
import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../error/customError";
import { RecipeInputDTO } from "../model/recipe";
import { IdGenerator } from "../service/generatorId";
import { recipe } from "../types/recipe";
import { RecipeRepository } from "./RecipeRepository";
import { TokenGenerator } from '../service/generatorToken';

const Idgenerator=new IdGenerator()
const hash=new TokenGenerator()
export class RecipeBusiness implements RecipeRepository{

	createRecipe=async(input: RecipeInputDTO): Promise<string>=> {
		try {
			const {title,description,createdAt}=input
			if (!title || !description || !createdAt) {
				throw new CustomError(400,"Preencha todos os campos da requisição");
			}
			const id: string = Idgenerator.generateId();
			const recipe:recipe={
				id,
				title,
				description,
				createdAt
			}
			const recipeDatabase=new RecipeDatabase()
			await recipeDatabase.createRecipe(recipe)

			const token = hash.generateToken(id)
			return token
		} catch (error:any) {
			throw new Error(error.message);
		}	
	}
}