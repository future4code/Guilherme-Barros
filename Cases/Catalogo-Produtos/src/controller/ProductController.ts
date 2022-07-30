import { Request, Response } from "express";
import { ProductBusiness } from "../business/Product/ProductBusiness";
import { ProductDatabase } from "../data/Product/ProductDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const authenticator = new Authenticator()
const idGenerator = new IdGenerator()
const productDatabase=new ProductDatabase()
export class ProductController {
	async insert(req:Request,res:Response){
		try {
		const auth=req.headers.authorization!
		const {products}=req.body
		const productBusiness=new ProductBusiness(productDatabase,authenticator,idGenerator)
			await productBusiness.insert(products,auth)
		res.status(200).send("Produtos inseridos!")	
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
	async searchById(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const search=req.query.search as string
			const productBusiness=new ProductBusiness(productDatabase,authenticator,idGenerator)
			const result=await productBusiness.searchById(search,auth)
			res.status(200).send(result)
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
	async searchByName(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const search=req.query.search as string
			const productBusiness=new ProductBusiness(productDatabase,authenticator,idGenerator)
			const result=await productBusiness.searchByName(search,auth)
			res.status(200).send(result)
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
	async searchByTag(req:Request,res:Response){
		try {
			const auth=req.headers.authorization!
			const search=req.query.search as string
			const productBusiness=new ProductBusiness(productDatabase,authenticator,idGenerator)
			const result=await productBusiness.searchByTag(search,auth)
			res.status(200).send(result)
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
}