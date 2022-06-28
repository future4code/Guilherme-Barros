import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (email: string) => {
    try {
  
      const result = await UserDatabase.connection("Auth_users")
        .select()
        .where({email});

      
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById=async(id:string):Promise<any>=>{
    try {
  
      const res=await UserDatabase.connection("Auth_users").where("id",id)
  
  
       return res[0]
    }  catch (error: any) {
      throw new CustomError(400, error.message);
    }
    }

 
}
