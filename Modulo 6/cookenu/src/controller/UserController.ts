import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {
	constructor(private userBusiness:UserBusiness){}
	public signup = async (req: Request, res: Response) => {

		try {
		  const { name, email, password } = req.body;
	
	
		  const input: UserInputDTO = {
		    name,
		    email,
		    password
		  };
		
		  const token = await this.userBusiness.createUser(input);
	
		  res.status(201).send({ message: "Usuário criado!", token });
		} catch (error: any) {
		  res.status(400).send(error.message);
		}
	      }; 
	      public login = async (req: Request, res: Response) => {
		try {
		  const { email, password } = req.body;
	    
		  const input: LoginInputDTO = {
		    email,
		    password
		  };
		
		  const token = await this.userBusiness.login(input);
	    
		  res.status(200).send({ message: "Usuário logado!", token });
		} catch (error: any) {
		  res.status(400).send(error.message);
		}
	      };   
	      getUserData=async (req:Request,res:Response) => {
		try {
			const auth=req.headers.authorization!

			const userBusiness=new UserBusiness()
			const result=await userBusiness.getUserData(auth)

			res.status(200).send({id:result.id,name:result.name,email:result.email})
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	      }
	      follow=async(req:Request,res:Response)=>{
		try {
			const {followId}=req.body
			const auth=req.headers.authorization!
			await this.userBusiness.follow(followId,auth)

			res.status(200).send("Seguindo usuário com sucesso")
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	      }
	      getUserById=async (req:Request,res:Response) => {
		try {
			const auth=req.headers.authorization!
			const {id}=req.params
			const userBusiness=new UserBusiness()
			const result=await userBusiness.getUserById(id,auth)
			res.status(200).send({id:result.id,name:result.name,email:result.email})
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	      }
	     unfollow=async(req:Request,res:Response)=>{
		try {
			const auth=req.headers.authorization!
			const {id}=req.params
			const userBusiness=new UserBusiness()
			await userBusiness.unfollow(id,auth)	
			res.status(200).send("Deixou de seguir com sucesso")

		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	      }
	      getFeed=async (req:Request,res:Response) => {
		try {
			const auth=req.headers.authorization!
			const userBusiness=new UserBusiness()
			
		} catch (error: any) {
			res.status(400).send(error.message);
		      }
	      }
}