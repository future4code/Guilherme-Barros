import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';
import { ErrorCallback } from "typescript";

export default async function insertProduct(name:string,price:number,image_url:string):Promise<void>{
	await connection.insert({
		id: generateId(),
		name,
	      price,
	      image_url
	}).into("labecommerce_products")
}

export const createProducts=async(req:Request,res:Response):Promise<any>=>{
	try {
		const{name,price,image_url}=req.body;
		if(!name || !price || !image_url){
			throw new Error("Faltando parâmetro na requisição");
		}
		await insertProduct(name,price,image_url)
		res.status(200).send({message: "Sucess"});
	}catch(error){
		if (error instanceof Error) {
		 res.send(error.message);
		} else {
		  res.send(error.message || error.sqlMessage)
		}
	       }