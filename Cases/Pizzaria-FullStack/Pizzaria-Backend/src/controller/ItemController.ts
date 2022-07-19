import { ItemBusiness } from './../business/Item/ItemBusiness';
import { Request, Response } from "express";
import { ItemInputDTO } from "../model/Item";
import { PizzaDatabase } from '../data/Pizza/PizzaDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { ItemDatabase } from '../data/Item/ItemDatabase';

const pizzaDatabase = new PizzaDatabase()
const itemDatabase = new ItemDatabase()
const idGenerator = new IdGenerator()
export class ItemController {
	async create(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const {pizzaId,quantity}=req.body
			const input:ItemInputDTO={
				pizzaId,
				quantity
			}
			const itemBusiness=new ItemBusiness(pizzaDatabase,itemDatabase,idGenerator)
			await itemBusiness.create(input,auth)
			res.status(200).send("Item criado!")
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async delete(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const {itemId}=req.params
			const itemBusiness=new ItemBusiness(pizzaDatabase,itemDatabase,idGenerator)
			await itemBusiness.deleteItem(itemId,auth)
			res.status(200).send("Item deletado com sucesso!")
		}  catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
}