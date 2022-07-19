import { Item, item } from "../../model/Item";

export interface IItemDatabase{
	create(item:item):Promise<void>
	getQuantity(itemId:string):Promise<void>
	getPizzaIdByItem(itemId:string):Promise<string>
	deleteItem(itemId:string):Promise<void>
	getById(itemId:string):Promise<Item>
}