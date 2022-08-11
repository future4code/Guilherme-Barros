import { product } from "../../types/product";

export interface ProductRepository{
	insert(products:product[],token:string):Promise<void>
	searchById(search:number,token:string):Promise<product[] | []>
	searchByName(search:string,token:string):Promise<product[] | []>
	searchByTag(search:string,token:string):Promise<product[] | []>
}