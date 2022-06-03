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
}