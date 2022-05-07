import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';

export default async function insertProduct(name:string,price:number,image:string):Promise<void>{
	await connection.insert({
		id: generateId(),
		name: name,
	      price: price,
	      image_url:image
	}).into("labecommerce_products")
}

export const createProducts=async(req:Request,res:Response):Promise<void>=>{
	try {
		const{name,price,image_url}=req.body;
		if(!name || !price || !image_url){
			throw new Error("Faltando parâmetro na requisição");
		}
		await insertProduct(name,price,image_url)
		res.status(200).send({message: "Sucess"});
	} catch (error:any) {
		res.status(400).send({message: error.message});
	}
}