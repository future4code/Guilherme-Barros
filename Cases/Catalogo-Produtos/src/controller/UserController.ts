import { Request, Response } from "express";
import { UserBusiness } from "../business/User/UserBusiness";
import { UserDatabase } from "../data/User/UserDatabase";
import { LoginInputDTO, UserInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const authenticator=new Authenticator()
const userDatabase=new UserDatabase()
const hashManager=new HashManager()
export class UserController{
	async signup(req:Request,res:Response){
		try {
			const input: UserInputDTO = {
				email: req.body.email,
				name: req.body.name,
				password: req.body.password,
				role: req.body.role
			    }
		
			    const userBusiness = new UserBusiness(idGenerator,hashManager,userDatabase,authenticator);
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
		
			    const userBusiness = new UserBusiness(idGenerator,hashManager,userDatabase,authenticator);
			    const token = await userBusiness.login(loginData);
		
			    res.status(200).send({ token });	
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
}