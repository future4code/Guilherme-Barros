import { product } from "../../types/product";

export interface IProductDatabase{
	insert(product:product):Promise<void>
	searchById(id:string):Promise<product[] | []>
	searchByName(name:string):Promise<product[] | []>
	searchByTag(tag:string):Promise<product[] | []>
}