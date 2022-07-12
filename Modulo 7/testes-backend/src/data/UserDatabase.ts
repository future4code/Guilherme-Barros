import { user } from "../business/ports";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
	private toModel(dbModel?: any): User {
		return (
		   dbModel &&
		   new User(
			dbModel.id,
		     	 dbModel.name,
		     	 dbModel.email,
		      	dbModel.password,
		     	 dbModel.role
		   )
		);
	     }
	 signup=async(user:user):Promise<void>=>{
		try {
		await UserDatabase.connection
		.insert({id:user.id,name:user.name,email:user.email,password:user.password,
		role:user.role}).into("User_Arq")	
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	getUserById=async(id:string):Promise<User>=>{
		try {
		const user=await UserDatabase.connection("User_Arq").where({id})
		return this.toModel(user[0])	
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	getAllUsers=async():Promise<User[]>=>{
		try {
			const users=await UserDatabase.connection("User_Arq")
			return users
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	getProfile=async(id:string):Promise<User>=>{
		try {
			const userDetails=await UserDatabase.connection("User_Arq").where({id})
			return userDetails[0]
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
}