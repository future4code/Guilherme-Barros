import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { Purchase } from "../types";

export default async function selectPurchases(userId:string):Promise<any>{
	const res=await
	connection("labecommerce_purchases")
	.select("labecommerce_users.name AS userName",
	"labecommerce_products.name AS productName",
	"price",
	"quantity",
	"total_price as totalPrice")
	.join("labecommerce_users","labecommerce_purchases.user_id","labecommerce_users.id")
	.join("labecommerce_products","labecommerce_purchases.product_id","labecommerce_products.id")
	.where("labecommerce_users.id",userId)

	return res
}

export const getPurchasesOfUser=async(req:Request,res:Response):Promise<any>=>{
	try {
		const {userId}=req.params
		const compras:Purchase[]=await selectPurchases(userId)
		if (compras===[]) {
			throw new Error("[]");
		}
		res.status(200).send(compras);
	} catch(error){
		if (error instanceof Error) {
		 res.send(error.message);
		} else {
		  res.send(error.message || error.sqlMessage)
		}
	}
}