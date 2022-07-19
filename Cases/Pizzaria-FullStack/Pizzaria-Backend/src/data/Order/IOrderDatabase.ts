import { Order, order } from './../../model/Order';
export interface IOrderDatabase{
	create(order:order):Promise<void>
	getAll():Promise<Order[] | []>
	getById(id:string):Promise<Order>
}