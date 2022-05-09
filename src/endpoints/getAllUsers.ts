import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { User } from "../types";
import selectPurchases from "./getPurchasesOfUser";

export async function addPurchaseUser(users:User[]):Promise<any> {
	try {
		for (let user of users) {
			user.purchases = await selectPurchases(user.id)
		    }

		    return users
	} catch (error) {
		if (error instanceof Error) {
			return error.message;
		       } else {
			return error.message;
		       }
	}
}

export default async function selectUsers():Promise<any>{
	const res=await connection("labecommerce_users")
	return res
}

export const getAllUsers=async(req:Request,res:Response):Promise<any>=>{
	try {
		const usuarios:User[]=await selectUsers().then(addPurchaseUser)
		if (usuarios===[]) {
			throw new Error("[]");	
		}
		res.status(200).send(usuarios);
	}catch(error){
		if (error instanceof Error) {
		 res.send(error.message);
		} else {
		  res.send(error.message || error.sqlMessage)
		}
	       }
}