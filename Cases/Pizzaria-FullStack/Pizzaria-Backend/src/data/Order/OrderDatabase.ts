import { order, Order } from "../../model/Order";
import { BaseDatabase } from "../BaseDatabase";
import { IOrderDatabase } from "./IOrderDatabase";

export class OrderDatabase extends BaseDatabase implements IOrderDatabase{
	private static TABLE_NAME = 'Order_CASE_PIZZA'
	async create(order: order): Promise<void> {
	try {
		await this.getConnection()
		.insert({
			id:order.id,
			user_id:order.userId,
			total:order.total,
			createdAt:order.createdAt,
			item_id:order.itemId
		}).into(OrderDatabase.TABLE_NAME)
	} catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }	
	}
	async getAll(): Promise<[] | Order[]> {
		try {
			const result= await this.getConnection()
			.select('*')
			.from(OrderDatabase.TABLE_NAME)

			return result
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
	
}