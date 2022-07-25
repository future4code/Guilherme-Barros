import { Request, Response } from "express";
import { PizzaBusiness } from "../business/Pizza/PizzaBusiness";
import { PizzaDatabase } from "../data/Pizza/PizzaDatabase";
import { UserDatabase } from "../data/User/UserDatabase";
import { PizzaInputDTO } from "../model/Pizza";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
const pizzaDatabase = new PizzaDatabase()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()
export class PizzaController{
	async create(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const {name,price,img_url,ingredients}=req.body
			const input:PizzaInputDTO={
				name,
				price,
				img_url,
				ingredients
			}
			const pizzaBusiness=new PizzaBusiness(pizzaDatabase,userDatabase,authenticator,idGenerator)
			await pizzaBusiness.create(input,auth)
			res.status(200).send("Pizza criada!")
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getAll(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const pizzaBusiness=new PizzaBusiness(pizzaDatabase,userDatabase,authenticator,idGenerator)
			const result=await pizzaBusiness.getAll(auth)
			res.status(200).send(result)
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getById(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const id=req.params.id
			const pizzaBusiness=new PizzaBusiness(pizzaDatabase,userDatabase,authenticator,idGenerator)
			const result=await pizzaBusiness.getById(id,auth)
			res.status(200).send(result)
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}

}