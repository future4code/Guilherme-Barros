import { Item, item } from "../../model/Item";

export interface IItemDatabase{
	create(item:item):Promise<void>
	getQuantity(orderId:string):Promise<number | []>
	getPizzaIdByOrder(itemId:string):Promise<string>
	deleteItem(itemId:string):Promise<void>
	getById(itemId:string):Promise<Item>
	getActives():Promise<any>
	getOrderId():Promise<string>
	getIdActive():Promise<string>
	
}