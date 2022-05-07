import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';

export default async function insertUser(name:string,email:string,password:string):Promise<void>{
	await connection.insert({
		id: generateId(),
		name,
		email,
		password
	}).into("labecommerce_users")
}

export const createUser=async(req:Request,res:Response):Promise<any>=>{
	try {
		const{name,email,password}=req.body;
		if(!name || !password || !email){
			throw new Error("Faltando parâmetro na requisição");
		}
		await insertUser(name,email,password)
		res.status(200).send({message: "Sucess"});
	}catch(error){
		if (error instanceof Error) {
		 res.send(error.message);
		} else {
		  res.send(error.message || error.sqlMessage)
		}
	       }