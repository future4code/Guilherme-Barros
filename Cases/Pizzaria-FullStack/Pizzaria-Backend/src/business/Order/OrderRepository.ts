import { Order, OrderInputDTO } from "../../model/Order";

export interface OrderRepository{
	create(input:OrderInputDTO,token:string):Promise<void>
	getAll(token:string):Promise<Order[] | []>
	getById(id:string,token:string):Promise<Order>
}