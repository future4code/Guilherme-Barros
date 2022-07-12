import { Request, Response } from "express";

export default (userBusiness:any)=>async (req:Request,res:Response)=>{
	try {
		
		const {role}=req.params
		const result=await userBusiness.getAllUsers(role)
		console.log(result);
		
		res.status(200).send(result)
	} catch (error:any) {
		throw new Error(error.message);
	}
}