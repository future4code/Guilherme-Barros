import { Pizza, pizza } from './../../model/Pizza';
export interface IPizzaDatabase{
	create(pizza:pizza):Promise<void>
	getByName(name:string):Promise<Pizza>
	getAll():Promise<Pizza[] | []>
	getById(id:string):Promise<Pizza>
	getPriceByItem(pizzaId:string):Promise<number>
}