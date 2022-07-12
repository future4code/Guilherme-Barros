import { Request, Response } from "express";

export default (userBusiness:any)=>async (req:Request,res:Response)=>{
	try {
		const {id}=req.params
		const result=await userBusiness.getProfile(id)
		console.log(result);
		
		res.status(200).send(result)
	} catch (error:any) {
		throw new Error(error.message);
	}
}