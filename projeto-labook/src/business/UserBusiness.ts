import { comment } from './../types/Comment';
import { friendship } from './../types/Friendship';
import { FriendshipInputDTO, FriendshipInputDeleteDTO, CommentInputDTO, LikeInputDTO } from './../model/user';
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, InvalidType, NotFoundPosts } from "../error/customError";
import { UserInputDTO } from "../model/user";
import { generateId } from "../service/generateId";
import { user } from "../types/User";
import { UserRepository } from "./UserRepository";
import { post } from '../types/Post';
import { Like } from '../types/Like';
import { timeStamp } from 'console';

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
	public deleteFriendship=async(input:FriendshipInputDeleteDTO):Promise<void>=> {
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
	public getFeed=async(page:number):Promise<any>=>{
		try {
			let size = 5
			let offset = size*(page-1)
			if(isNaN(size) || size < 1) {
			   size = 5
			 }
			return await this.userDatabase.getFeed(size,offset)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	/**
	 * getPostByType=async
type:string	=> */
	public getPostByType=async(type:string)=> {
		try {
			if (!type) {
				throw new CustomError(400,"Por favor, passe o parâmetro type");		
			}	
			if(type !== 'normal' && type !== 'event'){
				throw new InvalidType();
			}
			const posts:post[]= await this.userDatabase.getPostByType(type)
			
			if (posts.length === 0) {
				throw new NotFoundPosts();
			}else{
				return posts		
			}
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	
	public publishComment=async (input:CommentInputDTO):Promise<void> => {
		try {
			const {post_id,message}=input
			if (!post_id || !message) {
				throw new CustomError(400,"Por favor, passe o id do post a ser comentado e/ou o comentário corretamente");
			} 
			const id:string=generateId()
			const comment={
				id,
				post_id,
				message
			}
			await this.userDatabase.publishComment(comment)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	/**
	 * likePost=async
input:LikeInputDTO	:Promise<void>=> */
	public likePost=async(input:LikeInputDTO):Promise<void>=> {
		try {
			const {post_id}=input
			if (!post_id) {
				throw new CustomError(400,"Por favor, passe o id correto do post a ser curtido");
			} 
			const like:Like={
				post_id
			}
			await this.userDatabase.likePost(like)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
}