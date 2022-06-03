import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {
	constructor(private postBusiness:PostBusiness) {}

	public createPost=async(req:Request,res:Response) =>{
		try {
			const {photo,description,type,createdAt,authorId}=req.body
			const input:PostInputDTO={
				photo,
				description,
				type,
				createdAt,
				authorId
			}
			await this.postBusiness.createPost(input)
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
	
	public getPostById=async(req:Request,res:Response)=> {
		try {
			const {id}=req.params
			return await this.postBusiness.getPostById(id)
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
}