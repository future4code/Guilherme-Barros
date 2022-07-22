import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {
	public signup = async (req: Request, res: Response):Promise<void> => {
		try {
		  const { email, password } = req.body;
	    
		  const input: UserInputDTO = {
		    email,
		    password,
		  };
		  const userBusiness = new UserBusiness()
		  const token = await userBusiness.createUser(input);
	    
		  res.status(201).send({ token });
		} catch (error: any) {
		  res.status(400).send(error.message);
		}
	      };
	      public login = async (req: Request, res: Response):Promise<void> => {
		try {
		  const { email, password } = req.body;
	    
		  const input: UserInputDTO = {
		    email,
		    password
		  };
		  const userBusiness = new UserBusiness()
		  const token = await userBusiness.login(input);
	    
		  res.status(201).send({ token });
		} catch (error: any) {
		  res.status(400).send(error.message);
		}
	      };     
	
	      public getUserData=async(req: Request, res: Response):Promise<any>=> {
		try {
			const authorization=req.headers.authorization!
			
			const userBusiness = new UserBusiness()
			const result =await userBusiness.getUserData(authorization as string) 
			res.status(200).send({email:result.email,password:result.password})
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	      } 
}