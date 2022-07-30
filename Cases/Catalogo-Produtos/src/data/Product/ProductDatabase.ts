import { product } from "../../types/product";
import { tag } from "../../types/tag";
import { BaseDatabase } from "../BaseDatabase";
import { IProductDatabase } from "./IProductDatabase";

export class ProductDatabase extends BaseDatabase implements IProductDatabase{
	private static TABLE_NAME ='Product_Catalog'
	async insertTags(tag: tag): Promise<void> {
		try {
			await this.getConnection()
			.insert({
				id:tag.id,
				name:tag.name,
				productId:tag.productId
			}).into('Tag_Product')
		}  catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	async insert(itemId:string,name:string): Promise<void> {
		try {
			await this.getConnection()
			.insert({
				id:itemId,
				name
			}).into(ProductDatabase.TABLE_NAME)
		}  catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	async searchById(id: string): Promise<any> {
		try {
			const result=await this.getConnection()
			.select("*")
			.from(ProductDatabase.TABLE_NAME)
			.where({id})
			return result[0]
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	async searchByName(name: string): Promise<product[] | []> {
		try {
			const result=await this.getConnection()
			.select("*")
			.from(ProductDatabase.TABLE_NAME)
			.where("name","LIKE",`%${name}%`)
			return result
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	async searchByTag(tag: string): Promise<any> {
		try {
			const result=await this.getConnection()
			.select("productId")
			.from('Tag_Product')
			.where("name","LIKE",`%${tag}%`);
			
			
			return result
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	
}