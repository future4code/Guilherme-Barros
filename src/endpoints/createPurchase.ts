import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';
import { Product } from "../types";

export  async function selectProductById(id:string):Promise<any> {
	const res=await connection("labecommerce_products").where("id",id)
	return res
}
export default async function insertPurchase(user:string,productId:string,quantity:number):Promise<void>{
	const product:Product=await selectProductById(productId)
	const total=product.price*quantity
	await connection.into("labecommerce_purchases")
	.insert({
		id: generateId(),
		user_id:user,
	      product_id: productId,
	      quantity,
	      total_price:total
	})
}

export const createPurchase=async(req:Request,res:Response):Promise<any>=>{
	try {
		const{user_id,product_id,quantity}=req.body;
		if(!user_id || !product_id || !quantity){
			throw new Error("Faltando parâmetro na requisição");
		}
		await insertPurchase(user_id,product_id,quantity)
		res.status(200).send({message: "Sucess"});
	} catch(error){
		if (error instanceof Error) {
		 res.send(error.message);
		} else {
		  res.send(error.message || error.sqlMessage)
		}
	       }
}