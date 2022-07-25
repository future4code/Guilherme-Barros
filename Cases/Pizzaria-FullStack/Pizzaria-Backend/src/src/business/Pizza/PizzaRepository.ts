import { Pizza, PizzaInputDTO } from "../../model/Pizza";

export interface PizzaRepository{
	create(input:PizzaInputDTO,token:string):Promise<void>
	getAll(token:string):Promise<Pizza[] | []>
	getById(id:string,token:string):Promise<Pizza>
}