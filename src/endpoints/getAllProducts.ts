import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { Product } from "../types";


export default async function selectProducts(order?:string,search?:string):Promise<any>{
	const res=await connection("labecommerce_products")
	.orderBy("labecommerce_products.price",order)
	.where("labecommerce_products.name","like",`%${search}%`)
	.orWhere("labecommerce_products.price", "like", `%${search}%`)
        .orWhere("labecommerce_products.id", "like", `%${search}%`)
        .orWhere("labecommerce_products.image_url", "like", `%${search}%`)
	return res
}

export const getAllProducts=async(req:Request,res:Response):Promise<any>=>{
	try {
		const order=req.query.order as string
		const search=req.query.sort as string || "%"
		const produtos: Product[]=await selectProducts(order, search)
		if (produtos===[]) {
			throw new Error("[]");

		}
		res.status(200).send(produtos);
	}catch(error){
		if (error instanceof Error) {
		 res.send(error.message);
		} else {
		  res.send(error.message || error.sqlMessage)
		}
	       }
}