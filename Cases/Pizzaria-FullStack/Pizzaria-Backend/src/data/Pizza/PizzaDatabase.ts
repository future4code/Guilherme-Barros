import { Pizza, pizza } from '../../model/Pizza';
import { BaseDatabase } from '../BaseDatabase';
import { IPizzaDatabase } from './IPizzaDatabase';
export class PizzaDatabase extends BaseDatabase implements IPizzaDatabase {
	
	private static TABLE_NAME = 'Pizza_Case'
	async create(pizza: pizza): Promise<void> {
	try {
			await this.getConnection()
			.insert({
				id:pizza.id,
				name:pizza.name,
				price:pizza.price,
				img_url:pizza.imgUrl,
				ingredients:pizza.ingredients
			}).into(PizzaDatabase.TABLE_NAME)
	}catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getByName(name: string): Promise<Pizza> {
	    try {
		const result=await this.getConnection()
		.select("*")
		.from(PizzaDatabase.TABLE_NAME)
		.where({name})
		return result[0]
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getAll():Promise<Pizza[] | []>{
		try {
		const result =await this.getConnection()
		.select("*")
		.from(PizzaDatabase.TABLE_NAME)
		return result	
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async getById(id: string): Promise<Pizza> {
	    try {
		const result=await this.getConnection()
		.select('*')
		.from(PizzaDatabase.TABLE_NAME)
		.where({id})
		return Pizza.toPizzaModel(result[0])
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getPriceByItem(pizzaId:string):Promise<number>{
		try {
		
		
		const result=await this.getConnection()
		.from(PizzaDatabase.TABLE_NAME)
		.join('Item',"Pizza_Case.id","=",'Item.pizza_id')
		.select('price')
		
		const {price}=result[0]
	
		
		return price
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	
}