import { Request, Response } from "express";
import { UserBusiness } from "../business/User/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/User";

export class UserController{
	async signup(req:Request,res:Response){
		try {
			const input: UserInputDTO = {
				email: req.body.email,
				name: req.body.name,
				password: req.body.password,
				role: req.body.role
			    }
		
			    const userBusiness = new UserBusiness();
			    const token = await userBusiness.signup(input);
		
			    res.status(200).send({ token });
		
		}catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
	async login(req:Request,res:Response){
		try {
			const loginData: LoginInputDTO  = {
				email: req.body.email,
				password: req.body.password
			    };
		
			    const userBusiness = new UserBusiness();
			    const token = await userBusiness.login(loginData);
		
			    res.status(200).send({ token });	
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
}