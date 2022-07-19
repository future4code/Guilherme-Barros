import { User, user } from "../../model/User";
import { BaseDatabase } from "../BaseDatabase";
import { IUserDatabase } from "./IUserDatabase";

export class UserDatabase extends BaseDatabase implements IUserDatabase{
	private static TABLE_NAME = 'User_CASE_PIZZA'
	async signup(user: user): Promise<void> {
		try {
			await this.getConnection()
			.insert({
				id:user.id,
				name:user.name,
				email:user.email,
				password:user.password,
				role:user.role
			}).into(UserDatabase.TABLE_NAME)
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async getByEmail(email: string): Promise<User> {
	    try {
		const result = await this.getConnection()
		.select("*")
		.from(UserDatabase.TABLE_NAME)
		.where({email})

		return User.toUserModel(result[0])
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	
}