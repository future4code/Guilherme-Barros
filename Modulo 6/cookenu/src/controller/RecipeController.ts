import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeEditInputDTO, RecipeInputDTO } from "../model/recipe";


export class RecipeController {
	constructor(private recipeBusiness:RecipeBusiness) {}
	createRecipe=async(req:Request,res:Response)=>{
		try {
			const auth=req.headers.authorization!

			const {title,description}=req.body
			const input:RecipeInputDTO={
				title,
				description
			}	
			 await this.recipeBusiness.createRecipe(input,auth)

			res.status(200).send("Receita criada")
		}  catch (error: any) {
			res.status(400).send(error.message);
		      }
	}
	getRecipeById=async(req:Request,res:Response)=>{
		try {
			const auth=req.headers.authorization!
			const {id}=req.params
			const result=await this.recipeBusiness.getRecipeById(id,auth)
			res.status(200).send(result)
		}  catch (error: any) {
			res.status(400).send(error.message);
		      }
	}
	editRecipe=async(req:Request,res:Response)=>{
		try {
			const auth=req.headers.authorization!
			const {title,description,createdAt,userId,userName}=req.body
			const {id}=req.params
			const input:RecipeEditInputDTO={
				title,
				description,
				createdAt,
				userId,
				userName
			}	
			await this.recipeBusiness.editRecipe(input,id, auth)
			res.status(200).send("Receita editada com sucesso")
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	}
	deleteRecipe=async(req:Request,res:Response)=>{
		try {
			const auth=req.headers.authorization!
		const {id}=req.params
			await this.recipeBusiness.deleteRecipe(id,auth)
			res.status(200).send("Receita deletada com sucesso")
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	}
	
}