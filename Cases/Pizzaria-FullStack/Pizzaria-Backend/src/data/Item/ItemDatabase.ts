import { raw } from "express";
import { Item, item } from "../../model/Item";
import { BaseDatabase } from "../BaseDatabase";
import { IItemDatabase } from "./IItemDatabase";

export class ItemDatabase extends BaseDatabase implements IItemDatabase{
	private static TABLE_NAME = 'Item'
	async create(item: item): Promise<void> {
	    try {
		
		
		
		await this.getConnection()
		.insert({
			id:item.id,
			pizza_id:item.pizzaId,
			order_id:item.order_id,
			status:item.status,
			quantity:item.quantity
		}).into(ItemDatabase.TABLE_NAME)
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getQuantity(orderId: string): Promise<number> {
	    try {
		
		
		const result = await this.getConnection()
		.select("quantity")
		.from(ItemDatabase.TABLE_NAME)
		.where('Item.order_id',"=",`${orderId}`)
		
		const {quantity}=result[0]
		return quantity
		
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getPizzaIdByOrder(orderId:string):Promise<string>{
		try {
		const pizzaId=await this.getConnection()
		.select("pizza_id")
		.from(ItemDatabase.TABLE_NAME)
		.where("order_id",orderId)
		const {pizza_id}=pizzaId[0]
	
		
		
		return pizza_id
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async deleteItem(itemId: string): Promise<void> {
	    try {
		await this.getConnection()
		.from(ItemDatabase.TABLE_NAME)
		.where('id',itemId)
		.del()
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getById(itemId: string): Promise<Item> {
	    try{
		const result = await this.getConnection()
		.select('*')
		.from(ItemDatabase.TABLE_NAME)
		.where('id',itemId)
		return Item.toItemModel(result[0])
	    }catch(error:any){
		throw new Error(error.sqlMessage || error.message)
	    }
	}
	async getActives(): Promise<any> {
	    try {
		const result =await this.getConnection()
		.raw(`SELECT i.id,p.name,p.price,p.img_url,p.ingredients,i.quantity,i.order_id FROM Pizza_Case as p INNER JOIN Item i ON i.pizza_id=p.id WHERE i.status='ACTIVE'`)
		return result[0]
	    } catch(error:any){
		throw new Error(error.sqlMessage || error.message)
	    }
	}
	async getOrderId(): Promise<any> {
	    try {
		const result=await this.getConnection()
		.select('order_id')
		.from(ItemDatabase.TABLE_NAME)
		.where("status","ACTIVE")

		return result[0]
	    } catch(error:any){
		throw new Error(error.sqlMessage || error.message)
	    }
	}
	async getIdActive(): Promise<any> {
	    try {
		const result=await this.getConnection()
		.select('Item.id')
		.from(ItemDatabase.TABLE_NAME)
		.where("status",'INACTIVE')
		
		
		return result
	    } catch(error:any){
		throw new Error(error.sqlMessage || error.message)
	    }
	}
	
}