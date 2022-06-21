import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/recipe";


export class RecipeController {
	constructor(private recipeBusiness:RecipeBusiness) {}
	createRecipe=async(req:Request,res:Response):Promise<void>=>{
		try {
			const {title,description,createdAt}=req.body
			const input:RecipeInputDTO={
				title,
				description,
				createdAt
			}	
			const token = await this.recipeBusiness.createRecipe(input)

			res.status(200).send("access token: "+token)
		}  catch (error: any) {
			res.status(400).send(error.message);
		      }
	}
}