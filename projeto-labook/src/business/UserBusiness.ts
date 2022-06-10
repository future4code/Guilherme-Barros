import { friendship } from './../types/Friendship';
import { FriendshipInputDTO, FriendshipInputDeleteDTO } from './../model/user';
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { UserInputDTO } from "../model/user";
import { generateId } from "../service/generateId";
import { user } from "../types/User";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
	constructor(private userDatabase:UserRepository) {}
	
	public createUser=async(input:UserInputDTO)=> {
		try {
			const { name, email, password } = input;


			if (!name || !email || !password) {
				throw new CustomError(
				  400,
				  'Preencha os campos "name", "email" e "password"'
				);
			      }
			
			      if (name.length < 4) {
				throw new InvalidName();
			      }
			
			      if (!email.includes("@")) {
				throw new InvalidEmail();
			      }
			      if(password.length<6){
				      throw new InvalidPassword();
			      }
			      const id: string = generateId();

			      const user: user = {
				id,
				name,
				email,
				password,
			      };
			     
			      await this.userDatabase.insertUser(user);

		} catch (error:any) {
			throw new Error(error.message);
		}		
	}
	public createFriendship=async(input:FriendshipInputDTO)=> {
		try {
			const { user_id, friend_id}=input
			if (!user_id || !friend_id) {
				throw new CustomError(400,"Há parâmetros faltando na requisição.");
			}
			const id_friendship:string=generateId()
			const friendship:friendship={
				id_friendship,
				user_id,
				friend_id
			}
			await this.userDatabase.insertFriendship(friendship)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	public deleteFriendship=async(input:FriendshipInputDeleteDTO)=> {
		try {
			const {friend_id}=input
			if (!friend_id) {
				throw new CustomError(400,"Há parâmetros faltando na requisição.");
			}
			await this.userDatabase.deleteFriendship(friend_id)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	public getFeed=async():Promise<any>=>{
		try {
			return await this.userDatabase.getFeed()
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
}