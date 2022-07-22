import { Request, Response } from "express";
import { OrderBusiness } from "../business/Order/OrderBusiness";
import { ItemDatabase } from "../data/Item/ItemDatabase";
import { OrderDatabase } from "../data/Order/OrderDatabase";
import { PizzaDatabase } from "../data/Pizza/PizzaDatabase";
import { OrderInputDTO } from "../model/Order";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
const pizzaDatabase = new PizzaDatabase()
const orderDatabase = new OrderDatabase()
const itemDatabase = new ItemDatabase()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()
export class OrderController{
	async create(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const {userId,itemId}=req.body
			const input:OrderInputDTO={
				itemId
			}
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator,idGenerator)
			await orderBusiness.create(input,auth)
			res.status(200).send("Compra efetuada!")
		}  catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getById(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const id=req.params.id
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator,idGenerator)
			const result=await orderBusiness.getById(id,auth)
			res.status(200).send(result)

		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getAll(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator,idGenerator)
			const result=await orderBusiness.getAll(auth)
			res.status(200).send(result)
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
}