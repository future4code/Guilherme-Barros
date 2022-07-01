import { post } from "./types/Post";
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
			created_at:post.created_at,
			author_id:post.author_id
		}).into(PostDatabase.TABLE_NAME)
		   
		} catch (error:any) {
		   throw new Error(error.message)
		}
}
public getPostById=async (id:string) => {
	try {
		
		return await PostDatabase.connection(PostDatabase.TABLE_NAME)
		.where("id","=",id)
	} catch (error:any) {
		throw new Error(error.message)
	}
}
public deletePostById=async (id:string) => {
	try {
		
		return await PostDatabase.connection(PostDatabase.TABLE_NAME)
		.where("id","=",id).del()
	} catch (error:any) {
		throw new Error(error.message)
	}
}
public getFeed=async(size:number,offset:number):Promise<post[]>=> {
	try {
		return await PostDatabase.connection.raw(`
		SELECT p.id,p.photo,p.description,p.type,p.created_at,p.author_id 
		FROM labook_posts as p inner join labook_friends f 
		ON p.author_id=f.friend_id LIMIT ${size} OFFSET ${offset} order by p.created_at DESC 
		`)
	} catch (error:any) {
		throw new Error(error.message)
	}
}
public destroyConnection=async()=> {
	try {
	await PostDatabase.connection.destroy()	
	} catch (error:any) {
		throw new Error(error.message)
	}
}
}