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

	getFollowById=async(id:string):Promise<string>=>{
		try {
			const result=await UserDatabase.connection('Follow')
			.where("follow_id",id)
			
			
			return result[0].follow_id
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	unfollow=async(id:string,userId:string):Promise<void>=>{
		try {
		await UserDatabase.connection('Follow').where("follow_id",id).whereRaw(`user_id='${userId}'`).del()
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	getFeed=async(userId:string):Promise<recipe[]>=>{
		try {
		
		const result = await UserDatabase.connection.raw(`
		SELECT r.id, r.title, r.description, r.createdAt, r.userId, r.userName FROM Recipe 
		as r INNER JOIN Follow f ON r.userId = f.follow_id WHERE f.user_id= '${userId}' order by r.createdAt DESC`)	
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
	getAllRecipes=async(id:string):Promise<boolean>=>{
		try {
			const result = await UserDatabase.connection.raw(`
		SELECT r.id, r.title, r.description, r.createdAt, r.userId, r.userName 
		FROM Cookenusers as c INNER JOIN Recipe r ON c.id = '${id}' AND r.userId = '${id}';
		`)	
		if (result[0].id>1) {
			return true
		}else{
			return false
		}	
		}  catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	getAllFollows=async(id:string):Promise<boolean>=>{
		try {
			const result = await UserDatabase.connection.raw(`
			SELECT f.id FROM Follow as f INNER JOIN Cookenusers c ON c.id = '${id}' AND f.user_id = '${id}';
			`)	
			if (result[0].id>1) {
				return true
			}else{
				return false
			}	
		} catch (error: any) {
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
			DELETE FROM Follow WHERE user_id = '${id}' OR follow_id ='${id}'`)
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	putNewPassword=async(id:string,password:string):Promise<void>=>{
		try {
			await UserDatabase.connection('Cookenusers').where({id}).update({password})
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
}