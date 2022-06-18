import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";

export class UserController {

	public createUser=async(
		req:Request,
		res:Response
	)=> {
		try {
			const {name,email,password}=req.body
			const input={
				name,
				email,
				password
			}
			const userBusiness=new UserBusiness()
			userBusiness.createUser(input)
			res.status(200).send("Usuário criado com sucesso!")
		} catch (error:any) {
			res.status(400).send(error.message)
		}
	}
	
	public getAllUsers=async(req:Request,res:Response)=> {
		try {
			const userBusiness=new UserBusiness()
			const users=await userBusiness.getAllUsers()
			res.status(200).send(users)
		} catch (error:any) {
			res.status(400).send(error.message)
		}
	}

	public deleteUser=async(req:Request,res:Response)=> {
		try {
			const {id}=req.params
			const userBusiness=new UserBusiness()
			userBusiness.deleteUser(id)
			res.status(200).send("Usuário excluído com sucesso!")
		} catch (error:any) {
			res.status(400).send(error.message)
		}
	}
}