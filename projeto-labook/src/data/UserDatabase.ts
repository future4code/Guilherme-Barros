import { friendship } from './../types/Friendship';
import { user } from "../types/User"
import { BaseDatabase } from "./BaseDataBase"
import { comment } from '../types/Comment';
import { Like } from '../types/Like';

export class UserDatabase extends BaseDatabase{
	public insertUser = async(
		user: user
	     ) => {
		try {
		   await UserDatabase.connection.insert({
		      id: user.id,
		      name: user.name,
		      email: user.email,
		      password: user.password
		   }).into('labook_users')
		   
		} catch (error:any) {
		   throw new Error(error.message)
		}
}

	public insertFriendship=async(friendship:friendship)=> {
		try {
			await UserDatabase.connection.insert({
				id_friendship:friendship.id_friendship,
				user_id:friendship.user_id,
				friend_id:friendship.friend_id
			}).into('labook_friends')
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
	
	public deleteFriendship=async(friend_id:string)=> {
		try {
			await UserDatabase.connection("labook_friends").where("friend_id","=",friend_id).del()
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
	
	public getFeed=async(size:number,offset:number):Promise<any>=> {
		try {
			return await UserDatabase.connection.raw(`
			SELECT p.id,p.photo,p.description,p.type,p.created_at,p.author_id 
			FROM labook_posts as p inner join labook_friends f 
			ON p.author_id=f.friend_id LIMIT ${size} OFFSET ${offset} order by p.created_at DESC 
			`)
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
	/**
	 * getPostByType=async
type	 */
	public getPostByType=async(type:string):Promise<any>=> {
		try {
			return await UserDatabase.connection('labook_posts').where("type",type).orderBy("created_at","desc")
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
	/**
	 * publishComment=async
post_id,message	:Promise<void>=> */
	public publishComment=async(comment:comment):Promise<void>=> {
		try {
			await UserDatabase.connection.insert(
			{	id:comment.id,
				post_id:comment.post_id,
				message:comment.message}
			).into("labook_comments")
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
	/**
	 * likePost
	 */
	public likePost=async(like:Like):Promise<void>=> {
		try {
			await UserDatabase.connection.insert(
			{	post_id:like.post_id}
			).into("labook_likes")
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
	
	public deslikePost=async(post_id:string):Promise<void>=> {
		try {
			await UserDatabase.connection("labook_likes").where("post_id",post_id).del()
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
}