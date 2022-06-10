import { friendship } from './../types/Friendship';
import { FriendshipInputDTO, FriendshipInputDeleteDTO } from './../model/user';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";
import { post } from '../types/Post';

export class UserController {
	constructor(private userBusiness:UserBusiness){}
	public createUser = async (req: Request, res: Response) => {
		try {
		  const { name, email, password } = req.body;
		
			
		  const input: UserInputDTO = {
		    name,
		    email,
		    password,
		  };
		  
		  await this.userBusiness.createUser(input);
	    
		  res.status(201).send({ message: "Usuário criado!" });
		} catch (error: any) {
		  res.status(400).send(error.message);
		}
	      };
	public createFriendship=async (req:Request,res:Response) => {
		try {
			const {user_id,friend_id}=req.body

			const input:FriendshipInputDTO={
				user_id,
				friend_id
			}
			await this.userBusiness.createFriendship(input)
			res.status(201).send({ message: "Amizade criada!" });
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
	
	public deleteFriendship=async(req:Request,res:Response)=> {
		try {
			const {friend_id}=req.params
			
			
			const input:FriendshipInputDeleteDTO={
				friend_id
			}
			
			await this.userBusiness.deleteFriendship(input)

			res.status(200).send({message:`Amizade deletada com sucesso`})
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
	
	public getFeed=async(req:Request,res:Response):Promise<any>=> {
		try {
			const posts=await this.userBusiness.getFeed()
			res.status(200).send(posts[0])
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
}