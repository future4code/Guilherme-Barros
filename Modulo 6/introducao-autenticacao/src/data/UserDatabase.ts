
import { CustomError } from "../error/customError";
import { User } from "../model/user";

import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: User):Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
 public getUserByEmail=async(email:string):Promise<any>=>{
    const res= await UserDatabase.connection('Auth_users').where("email",email)
    return res[0]
  }
  public getUserById=async(id:string):Promise<any>=>{
  try {
    
    const res=await UserDatabase.connection("Auth_users").where("id",id)
    
    
     return res[0]
  }  catch (error: any) {
    throw new CustomError(400, error.message);
  }
  }
}