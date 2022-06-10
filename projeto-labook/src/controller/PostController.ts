import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {
	constructor(private postBusiness:PostBusiness) {}

	public createPost=async(req:Request,res:Response) =>{
		try {
			const {photo,description,type,created_at,author_id}=req.body
			const input:PostInputDTO={
				photo,
				description,
				type,
				created_at,
				author_id
			}
			await this.postBusiness.createPost(input)
			res.status(200).send("Post criado com sucesso")
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
	
	public getPostById=async(req:Request,res:Response)=> {
		try {
			const {id}=req.params
			const post =await this.postBusiness.getPostById(id)
			res.status(200).send(post)
		} catch (error:any) {
			res.status(400).send(error.message);
		}
	}
}