import { User } from "../../model/User";
import { user } from "../../types/user";
import { BaseDatabase } from "../BaseDatabase";
import { IUserDatabase } from "./IUserDatabase";

export class UserDatabase extends BaseDatabase implements IUserDatabase{
	private static TABLE_NAME ='User_Catalog'

	async signup(user: User): Promise<void> {
		try {
			await this.getConnection()
			.insert({
				id:user.getId(),
				name:user.getName(),
				email:user.getEmail(),
				password:user.getPassword(),
				role:user.getRole()
			}).into(UserDatabase.TABLE_NAME)

		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	async getByEmail(email: string): Promise<User> {
		try {
			const result=await this.getConnection()
			.select('*')
			.from(UserDatabase.TABLE_NAME)
			.where({email})
			return User.toUserModel(result[0]);
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }
	}
	
}