import { Pizza, pizza } from './../../model/Pizza';
export interface IPizzaDatabase{
	create(pizza:pizza):Promise<void>
	getByName(name:string):Promise<Pizza>
	getAll():Promise<Pizza[] | []>
	getById(id:string):Promise<Pizza>
	getPriceByOrder(orderId:string):Promise<number>
}