import { CustomError } from "../error/customError";
import { PostInputDTO } from "../model/post";
import { generateId } from "../service/generateId";
import { post } from "../types/Post";
import { PostRepository } from "./PostRepository";

export class PostBusiness{
	constructor(private postDatabase:PostRepository){}
	
	public createPost=async(input:PostInputDTO)=> {
		try {
			const {photo,description,type,createdAt,authorId}=input
			if (!photo || !description || !type || !createdAt || !authorId) {
				throw new CustomError(400,"Há parâmetros faltando. Revise o corpo da requisição");
			}
			const id: string = generateId();

			const post:post={
				id,
				photo,
				description,
				type,
				createdAt,
				authorId
			}
			await this.postDatabase.insertPost(post)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	
	public getPostById=async(id:string):Promise<any>=> {
		try {
			return await this.postDatabase.getPostById(id)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
}