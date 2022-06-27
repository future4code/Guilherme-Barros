import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController{
	async create(req:Request,res:Response):Promise<void>{
		try {
			const {title,description,duration_in_minutes,year_of_release}=req.body
			const movieBusiness=new MovieBusiness()
			await movieBusiness.create({title,
			description,duration_in_minutes,year_of_release})
			res.status(200).send("Filme criado com sucesso!")
		} catch (error) {
			res.status(400).send(error.message);	
		}
	}
	async get(req:Request,res:Response):Promise<any>{
		try {
			const movieBusiness=new MovieBusiness()
			const movies=await movieBusiness.get()
			res.status(200).send(movies)
		} catch (error) {
			res.status(400).send(error.message);	
		}
	}
}