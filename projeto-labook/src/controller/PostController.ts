import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
	constructor(postBusiness:PostBusiness) {}
	/**
	 * createPost
	 */
	public createPost=async(req:Request,res:Response) =>{
		try {
			const {}=req.body
		} catch (error:any) {
			
		}
	}
}