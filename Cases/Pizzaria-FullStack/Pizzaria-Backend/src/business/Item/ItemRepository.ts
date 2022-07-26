import { Item, ItemInputDTO } from "../../model/Item";

export interface ItemRepository{
	create(input:ItemInputDTO,token:string):Promise<void>
	deleteItem(itemId:string,token:string):Promise<void>
	getActives(token:string):Promise<Item>
}