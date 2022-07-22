import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(user: User): Promise<void> {
    try {
      await UserDatabase.connection
      .insert({
       id: user.id,
        name:user.name,
        email:user.email,
        password:user.password,
      })
      .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getAll():Promise<User[]>{
    try {
      return await UserDatabase.connection(UserDatabase.TABLE_NAME)
    } catch (error) {
      throw new Error(error.message); 
    }
  }
}
