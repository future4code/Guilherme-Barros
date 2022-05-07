import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";


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

export const getPurchasesOfUser=async(req:Request,res:Response):Promise<void>=>{
	try {
		const {userId}=req.params
		const compras=await selectPurchases(userId)
		if (compras===[]) {
			throw new Error("[]");
		}
		res.status(200).send(compras);
	} catch (error:any) {
		res.status(400).send({message: error.message});
	}
}

/* connection.raw(`select labecommerce_users.name as userName,
	labecommerce_products.name as productName,
	price,
	quantity,
	total_price
	FROM labecommerce_purchases
	inner join labecommerce_users on labecommerce_purchases.user_id=labecommerce_users.id
	inner join labecommerce_products on labecommerce_purchases.product_id=labecommerce_products.id
	where labecommerce_users.id=${userId}
	`)
	const purchases = res[0].map((purchase:any) => {
		return {
		    productName: purchase.productName,
		    price: purchase.price,
		    quantity: purchase.quantity,
		    totalPrice: purchase.totalPrice,
		}
	    })
	
	    return purchases
	*/	