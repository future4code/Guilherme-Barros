import { order, Order } from "../../model/Order";
import { BaseDatabase } from "../BaseDatabase";
import { IOrderDatabase } from "./IOrderDatabase";

export class OrderDatabase extends BaseDatabase implements IOrderDatabase{
	
	private static TABLE_NAME = 'Order_CASE_PIZZA'
	async create(order: order,itemId:string): Promise<void> {
	try {
		await this.getConnection()
		.insert({
			id:order.id,
			user_id:order.userId,
			total:order.total,
			createdAt:order.createdAt,
			
		}).into(OrderDatabase.TABLE_NAME)
		await this.getConnection()
		.from('Item')
		.where('id',itemId)
		.update({status:'INACTIVE'})
	} catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }	
	}
	async getAll(): Promise<[] | Order[]> {
		try {
			const result= await this.getConnection()
			.raw(`SELECT o.total, o.createdAt, u.name as nameUser, o.id, p.img_url,p.price,p.name,i.quantity 
			FROM Order_CASE_PIZZA o INNER JOIN User_CASE_PIZZA u ON o.user_id=u.id 
			INNER JOIN Item i ON i.order_id=o.id 
			INNER JOIN Pizza_Case p ON i.pizza_id = p.id`)

			return result[0]
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async getById(id: string): Promise<Order> {
		try {
			const result= await this.getConnection()
			.select('*')
			.from(OrderDatabase.TABLE_NAME)
			.where({id})
			return result[0]
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async getItemIdByOrder(orderId:string):Promise<string>{
		try {
			
			
			const result=await this.getConnection()
			.select('id')
			.from("Item")
			.where("Item.order_id",`${orderId}`)
			
			const{id}=result[0]
			
			
			
			
			return id
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async getDetails(id: string): Promise<any> {
	    try {
		
		
		const result=await this.getConnection()
		.raw(`SELECT o.total,o.createdAt,i.quantity,u.name,p.price,p.img_url,p.name as pizza,p.ingredients 
		FROM Order_CASE_PIZZA o INNER JOIN Item i on o.id=i.order_id 
		INNER JOIN Pizza_Case p ON p.id=i.pizza_id 
		INNER JOIN User_CASE_PIZZA u ON u.id=o.user_id
		WHERE o.id='${id}';
		`)
		return result[0]
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
}