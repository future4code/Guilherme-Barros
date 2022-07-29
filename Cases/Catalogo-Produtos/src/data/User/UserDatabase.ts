import { user } from "../../types/user";
import { BaseDatabase } from "../BaseDatabase";
import { IUserDatabase } from "./IUserDatabase";

export class UserDatabase extends BaseDatabase implements IUserDatabase{
	private static TABLE_NAME ='User_Catalog'

	async signup(user: user): Promise<void> {
		throw new Error("Method not implemented.");
	}
	async getByEmail(email: string): Promise<user> {
		throw new Error("Method not implemented.");
	}
	
}