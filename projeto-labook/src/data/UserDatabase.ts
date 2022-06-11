import { friendship } from './../types/Friendship';
import { user } from "../types/User"
import { BaseDatabase } from "./BaseDataBase"

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
	
	public getFeed=async():Promise<any>=> {
		try {
			return await UserDatabase.connection.raw(`
			SELECT p.id,p.photo,p.description,p.type,p.created_at,p.author_id 
			FROM labook_posts as p inner join labook_friends f 
			ON p.author_id=f.friend_id order by p.created_at DESC
			`)
		} catch (error:any) {
			throw new Error(error.message)
		}
	}
}