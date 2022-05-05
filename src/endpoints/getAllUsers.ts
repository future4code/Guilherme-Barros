import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";


export default async function selectUsers():Promise<any>{
	const res=await connection("labecommerce_users")
	return res
}

export const getAllUsers=async(req:Request,res:Response):Promise<void>=>{
	try {
		const usuarios=await selectUsers()
		if (usuarios===[]) {
			throw new Error("[]");
			
		}
		res.status(200).send(usuarios);
	} catch (error:any) {
		res.status(400).send({message: error.message});
	}
}