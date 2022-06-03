import { post } from "../types/Post";
import { BaseDatabase } from "./BaseDataBase";

export class PostDatabase extends BaseDatabase {
	private static TABLE_NAME = "labook_posts";
	public insertPost= async(
		post: post
	     ) => {
		try {
		   await PostDatabase.connection.insert({
		      id: post.id,
		      photo: post.photo,
		      description: post.description,
		     type: post.type,
			createdAt:post.createdAt,
			authorId:post.authorId
		}).into(PostDatabase.TABLE_NAME)
		   
		} catch (error:any) {
		   throw new Error(error.message)
		}
}
public getPostById=async (id:string) => {
	try {
		return await PostDatabase.connection(PostDatabase.TABLE_NAME)
		.where("id",id)
	} catch (error:any) {
		throw new Error(error.message)
	}
}
}