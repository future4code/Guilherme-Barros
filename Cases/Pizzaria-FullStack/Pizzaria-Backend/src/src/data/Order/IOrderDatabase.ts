import { Order, order } from './../../model/Order';
export interface IOrderDatabase{
	create(order:order,itemId:string):Promise<void>
	getAll():Promise<Order[] | []>
	getById(id:string):Promise<Order>
	getItemIdByOrder(orderId:string):Promise<string>
	getDetails(id:string):Promise<any>
}