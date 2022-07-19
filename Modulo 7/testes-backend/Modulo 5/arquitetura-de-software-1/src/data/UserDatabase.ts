import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
   
   public insertUser = async(
     id:string,
     name:string,
     email:string,
     password:string
   ) => {
      try {
         await UserDatabase.connection.insert({
            id,
            name,
            email,
            password
         }).into('User_Arq')
         
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   
   }

   public getAllUsers=async():Promise<any>=> {
      try {
         const users=[]

         const res=await UserDatabase.connection.select().into("User_Arq")
         for(let user of res){
            users.push(user);
      }

         return users;
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   /**
    * deleteUser=async
 :Promise<void>=>   */
   public deleteUser=async(id:string):Promise<void>=> {
      try {
         await UserDatabase.connection.where({id}).from("User_Arq").delete()
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

}

