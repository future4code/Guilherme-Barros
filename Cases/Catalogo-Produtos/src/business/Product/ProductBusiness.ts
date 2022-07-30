import { product } from './../../types/product';
import { ProductDatabase } from "../../data/Product/ProductDatabase";
import { CustomError } from "../../error/CustomError";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { tag } from "../../types/tag";
import { ProductRepository } from "./ProductRepository";

export class ProductBusiness implements ProductRepository{
	constructor(
		private productDatabase:ProductDatabase,
		private authenticator: Authenticator,
		private idGenerator: IdGenerator
	){}
	async insert(products: product[],token:string): Promise<void> {
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}
			if(!products){
				throw new CustomError(400,"Envie os produtos que deseja cadastrar");
			}
			for (const item of products) {
				
				await this.productDatabase.insert(item.id,item.name)
				let tags=item.tags
				for (const t of tags) {
					
					const tag:tag={
						id:this.idGenerator.generate(),
						productId:item.id,
						name:t
					}
					await this.productDatabase.insertTags(tag)
				}
			}
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async searchById(search: string,token:string): Promise<product[] | []> {
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}
			if (!search) {
				throw new CustomError(400,"Envie o id do produto que se deseja encontrar");	
			}
			const result=await this.productDatabase.searchById(search)
			if (!result) {
				throw new CustomError(404,"Id inválido ou produto não encontrado");
			}
			return result
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async searchByName(search: string,token:string): Promise<product[] | []> {
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}
			if (!search) {
				throw new CustomError(400,"Envie o nome do produto que se deseja encontrar");	
			}
			if (search.includes('_')) {
				const newSearch = search.replace(/_/g, ' ')
			const result=await this.productDatabase.searchByName(newSearch)
			return result	
		}
		const result=await this.productDatabase.searchByName(search)
			if (!result) {
				throw new CustomError(404,"Nome inválido ou produto não encontrado");
			}
			return result
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async searchByTag(search: string,token:string): Promise<product[] | []> {
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}
			if (!search) {
				throw new CustomError(400,"Envie a tag do produto que se deseja encontrar");	
			}
			
			
			let products= []
			const result=await this.productDatabase.searchByTag(search)
			if (!result) {
				throw new CustomError(404,"Tag inválida ou produto não encontrado");
			}
			for (let item of result) {
				const {productId}=item
				
				products.push(await this.productDatabase.searchById(productId))
			}
			return products
		}  catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}

}