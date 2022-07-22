import { UserInputDTO, LoginInputDTO  } from './../model/User';
import { Request, Response } from "express";
import { UserBusiness } from '../business/User/UserBussiness';
import { UserDatabase } from '../data/User/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()
const hashManager=new HashManager()
export class UserController{
	async signup(req:Request,res:Response){
		try {
			const input:UserInputDTO={
				name:req.body.name,
				email:req.body.email,
				password:req.body.password,
				role:req.body.role
			}
			const userBusiness = new UserBusiness(userDatabase,authenticator,idGenerator,hashManager);
            const token = await userBusiness.signup(input);

            res.status(200).send({ token });
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async login(req:Request,res:Response){
		try {
		const input:LoginInputDTO={
			email:req.body.email,
			password:req.body.password
		}
		const userBusiness = new UserBusiness(userDatabase,authenticator,idGenerator,hashManager);
		const token = await userBusiness.login(input);

		res.status(200).send({ token });
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
}