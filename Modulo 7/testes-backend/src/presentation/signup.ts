import { Request, Response } from "express";
import { UserDTO } from "../business/ports";

export default (userBusiness:any)=>async(req:Request,res:Response)=>{
	try {
		
		const {name,email,password,role}=req.body
		if(!name || !email || !password || !role) throw new Error('Parâmetros não informados');
		const input:UserDTO={
			name,
			email,
			password,
			role
		}
		const token=await userBusiness.signup(input)
		res.status(200).send(token)
	} catch (error:any) {
		throw new Error(error.message);
	}
}