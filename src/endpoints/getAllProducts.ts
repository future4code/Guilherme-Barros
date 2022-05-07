import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";


export default async function selectProducts():Promise<any>{
	const res=await connection("labecommerce_products")
	return res
}

export const getAllProducts=async(req:Request,res:Response):Promise<void>=>{
	try {
		const produtos=await selectProducts()
		if (produtos===[]) {
			throw new Error("[]");
			
		}
		res.status(200).send(produtos);
	} catch (error:any) {
		res.status(400).send({message: error.message});
	}
}