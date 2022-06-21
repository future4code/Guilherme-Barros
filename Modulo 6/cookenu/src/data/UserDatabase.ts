import { CustomError } from "../error/customError";
import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
	
	public createUser=async(user:user):Promise<void>=> {
		try {
			await UserDatabase.connection.insert({
				id:user.id,
				name:user.name,
				email:user.email,
				password:user.password
			}).into("Auth_users")
			
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	}
	public findUserByEmail=async(email:string):Promise<user>=> {
	try {
		const result= await UserDatabase.connection("Auth_users")
		.where({email})

		return result[0]
	}catch (error: any) {
		throw new CustomError(400, error.message);
	      }	
	}
	
	
}