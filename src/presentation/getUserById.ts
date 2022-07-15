import { Request, Response } from "express";

export default (userBusiness:any)=>async (req:Request,res:Response)=>{
	try {
		const {id}=req.params
		if (!id) {
			throw new Error("Por favor, passe o id do usuário na requisição");
		}
		const result=await userBusiness.getUserById(id)
		console.log(result);
		
		res.status(200).send(result)
	} catch (error:any) {
		throw new Error(error.message);
	}
}