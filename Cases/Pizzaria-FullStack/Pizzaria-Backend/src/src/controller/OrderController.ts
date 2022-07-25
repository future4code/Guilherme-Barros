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
			const {orderId}=req.body
			const input:OrderInputDTO={
				orderId
			}
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator)
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
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator)
			const result=await orderBusiness.getById(id,auth)
			res.status(200).send(result)

		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getAll(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator)
			const result=await orderBusiness.getAll(auth)
			res.status(200).send(result)
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getOrderDetails(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const {id}=req.params
			const orderBusiness=new OrderBusiness(orderDatabase,pizzaDatabase,itemDatabase,authenticator)
			const result=await orderBusiness.getDetails(id,auth)
			res.status(200).send(result)
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
}