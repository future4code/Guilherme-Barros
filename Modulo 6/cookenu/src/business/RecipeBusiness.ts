import { HashManager } from './../service/hashManager';
import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../error/customError";
import { RecipeInputDTO } from "../model/recipe";
import { IdGenerator } from "../service/generatorId";
import { recipe } from "../types/recipe";
import { RecipeRepository } from "./RecipeRepository";
import { TokenGenerator } from '../service/generatorToken';
import { dataAtualFormatada } from '../service/FormatDate';
import { UserDatabase } from '../data/UserDatabase';

const Idgenerator=new IdGenerator()
const tokenGenerator = new TokenGenerator()

export class RecipeBusiness implements RecipeRepository{

	createRecipe=async(input: RecipeInputDTO,token:string): Promise<void>=> {
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}
			const {title,description}=input

			if (!title || !description) {
				throw new CustomError(400,"Preencha todos os campos da requisição");
			}
			const userDatabase=new UserDatabase()
		const authData=tokenGenerator.tokenData(token)
		const user = await userDatabase.getUserById(authData.id)
			const id: string = Idgenerator.generateId();
			
			const createdAt=new Date()
			const recipe:recipe={
				id,
				title,
				description,
				createdAt,
				userId:user.id,
				userName:user.name
			}
			

			const recipeDatabase=new RecipeDatabase()
			await recipeDatabase.createRecipe(recipe)

			
		} catch (error:any) {
			throw new Error(error.message);
		}	
	}
	getRecipeById=async(id: string,token:string): Promise<recipe>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		if (!id) {
			throw new CustomError(400,"Passe o id na requisição");
		}
		const recipeDatabase=new RecipeDatabase()
		const recipe= await recipeDatabase.getRecipeById(id)
		if (!recipe) {
			throw new CustomError(404,"Receita não encontrada");
		}
		return recipe
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
	
}