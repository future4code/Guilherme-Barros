import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../error/customError";
import { RecipeEditInputDTO, RecipeInputDTO } from "../model/recipe";
import { IdGenerator } from "../service/generatorId";
import { recipe } from "../types/recipe";
import { RecipeRepository } from "./RecipeRepository";
import { TokenGenerator } from '../service/generatorToken';
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
		if (!user) {
			throw new CustomError(404,"Usuário não encontrado");
		}
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
	editRecipe=async(input: RecipeEditInputDTO,id:string, token: string): Promise<void>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		if (!id) {
			throw new CustomError(400,"Por favor, passe o id da receita que queira editar");
		}
		
		const {title,description,createdAt,userId,userName}=input
		if (!title || !description || !createdAt || !userId || !userName) {
			throw new CustomError(400,"Preencha todos os campos da requisição");
		}
		const recipeDatabase=new RecipeDatabase()
		const userDatabase=new UserDatabase()
		const authData=tokenGenerator.tokenData(token)
		const user = await userDatabase.getUserById(authData.id)
		if (!user) {
			throw new CustomError(404,"Usuário não encontrado");	
		}
		const verifyRecipe= await recipeDatabase.getRecipeByUser(authData.id)
		
		
		
		const recipe:recipe={
			id,
			title,
			description,
			createdAt,
			userId,
			userName
		}
		
	
		if (user.role === 'ADMIN' ||  user.role === 'NORMAL' && verifyRecipe) {
			await recipeDatabase.editRecipe(recipe.id,recipe)
		}
		else {
			throw new CustomError(404,"Receita não encontrada para este usuário");
		}
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
	deleteRecipe=async(id: string, token: string): Promise<void>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		if (!id) {
			throw new CustomError(400,"Por favor, passe o id da receita que queira deletar");
		}
		const recipeDatabase=new RecipeDatabase()
		const userDatabase=new UserDatabase()
		const authData=tokenGenerator.tokenData(token)
		const user = await userDatabase.getUserById(authData.id)
		if (!user) {
			throw new CustomError(404,"Usuário não encontrado");
		}
		const verifyRecipe= await recipeDatabase.getRecipeByUser(authData.id)

		if (user.role === "ADMIN" || verifyRecipe) {
			await recipeDatabase.deleteRecipe(id)	
		}else{
			throw new CustomError(404,"Receita não encontrada para este usuário");
		}
		

	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
}