import { ItemDatabase } from "../../data/Item/ItemDatabase";
import { OrderDatabase } from "../../data/Order/OrderDatabase";
import { PizzaDatabase } from "../../data/Pizza/PizzaDatabase";
import { CustomError } from "../../error/CustomError";
import { Item, item, ItemInputDTO, Status } from "../../model/Item";
import { IdGenerator } from "../../services/IdGenerator";
import { ItemRepository } from "./ItemRepository";

export class ItemBusiness implements ItemRepository{
	constructor(
		private pizzaDatabase:PizzaDatabase,
		private itemDatabase: ItemDatabase,
		private idGenerator: IdGenerator
	){}
	async create(input: ItemInputDTO,token:string): Promise<void> {
	    try {
		if (!token) {
			throw new CustomError(401,"Por favor, passe o token no header da requisição");
		}
		let {pizzaId,quantity}=input
	if ( !pizzaId || !quantity) {
			throw new CustomError(401,"Faltam parâmetros na requisição para a criação de item");
		}
		const pizza = await this.pizzaDatabase.getById(pizzaId)
		
		if (!pizza) {
			throw new CustomError(404,"Id da pizza inválido ou Pizza não encontrada");
		}
		
		
		const status=Status.ACTIVE
			
		
		const id=this.idGenerator.generate()
		
		
		let order_id=await this.itemDatabase.getOrderId()
		
		if (!order_id) {
		order_id=this.idGenerator.generate()
		
		}

		const item:item={
			id,
			pizzaId,
			status,
			order_id,
			quantity
		}
			
		await this.itemDatabase.create(item)
		
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async deleteItem(itemId: string,token:string): Promise<void> {
	    try {
		if (!token) {
			throw new CustomError(401,"Por favor, passe o token no header da requisição");
		}
		if (!itemId) {
			throw new CustomError(400,"Por favor, passe o id do item que deseja deletar");
		}
		const item = this.itemDatabase.getById(itemId)
		if (!item) {
			throw new CustomError(404,"Item não encontrado ou id inválido");
		}
		await this.itemDatabase.deleteItem(itemId)
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getActives(token: string): Promise<Item> {
	    try {
		if (!token) {
			throw new CustomError(401,"Por favor, passe o token no header da requisição");
		}
		const itens=this.itemDatabase.getActives()
		if (!itens) {
			throw new CustomError(404,"Carrinho vazio");
		}

		return itens
	    }catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
}