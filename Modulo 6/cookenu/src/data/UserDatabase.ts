import { CustomError } from "../error/customError";
import { recipe } from "../types/recipe";
import { follow, user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
	
	public createUser=async(user:user):Promise<void>=> {
		try {
			await UserDatabase.connection.insert({
				id:user.id,
				name:user.name,
				email:user.email,
				password:user.password,
				role:user.role
			}).into("Cookenusers")
			
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	public findUserByEmail=async(email:string):Promise<user>=> {
	try {
		const result= await UserDatabase.connection("Cookenusers")
		.where({email})

		return result[0]
	}catch (error: any) {
		throw new CustomError(400, error.message);
	      }	
	}
	getUserById=async(id:string):Promise<user>=>{
		try {
		const result = await UserDatabase.connection("Cookenusers")
		.where("id",id)	
		return result[0]
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }	
	}
	followUser=async (follow:follow):Promise<void> => {
		try {
			await UserDatabase.connection.insert({
				id:follow.id,
				user_id:follow.userId,
				follow_id:follow.followId
			}).into("Follow")
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }	
	}

	getFollowById=async(id:string):Promise<follow>=>{
		try {
			const result=await UserDatabase.connection('Follow')
			.where("follow_id",id)
			return result[0]
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	unfollow=async(id:string):Promise<void>=>{
		try {
		await UserDatabase.connection('Follow').where("follow_id",id).del()
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	getFeed=async(userId:string):Promise<recipe[]>=>{
		try {
		
		const result = await UserDatabase.connection.raw(`
		SELECT r.id, r.title, r.description, r.createdAt, r.userId, r.userName FROM Recipe 
		as r INNER JOIN Follow f ON r.userId = f.follow_id AND f.follow_id <> '${userId}' order by r.createdAt DESC`)	
		return result[0]
	} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	deleteAccount=async(id:string):Promise<void>=>{
		try {
		await UserDatabase.connection("Cookenusers").where({id}).del()	
		}  catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	
	deleteAllRecipes=async(id:string):Promise<void>=>{
		try {
		await UserDatabase.connection('Recipe').where("userId",id).del()
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	deleteAllFollows=async(id:string):Promise<void>=>{
		try {
			await UserDatabase.connection.raw(`
			DELETE FROM Follow WHERE user_id = '${id}' and follow_id ='${id}'`)
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
}