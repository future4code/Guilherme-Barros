import { ProductDatabase } from "../../data/Product/ProductDatabase";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { product } from "../../types/product";
import { ProductRepository } from "./ProductRepository";

export class ProductBusiness implements ProductRepository{
	constructor(
		private productDatabase:ProductDatabase,
		private authenticator: Authenticator,
		private idGenerator: IdGenerator
	){}
	async insert(products: product[],token:string): Promise<void> {
		try {
			
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async searchById(search: string,token:string): Promise<product[] | []> {
		try {
			
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async searchByName(search: string,token:string): Promise<product[] | []> {
		try {
			
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async searchByTag(search: string,token:string): Promise<product[] | []> {
		try {
			
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}

}