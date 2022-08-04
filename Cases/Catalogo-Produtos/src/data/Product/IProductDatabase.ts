import { product } from "../../types/product";
import { tag } from "../../types/tag";

export interface IProductDatabase{
	insert(itemId:number,name:string):Promise<void>
	insertTags(tag:tag):Promise<void>
	searchById(id:number):Promise<product | []>
	searchByName(name:string):Promise<product[] | []>
	searchByTag(tag:string):Promise<product[] | []>
}