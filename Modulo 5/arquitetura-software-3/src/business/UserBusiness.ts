import { UserDatabase } from "../data/UserDatabase"
import { InvalidDatesUser } from "../error/customError"
import { createUserDTO } from "../model/user"
import { generateId } from "../service/generateId"


export class UserBusiness {
  async create(input: createUserDTO):Promise<void> {
  try {
    const {email,name,password}=input
    if (!email || !name || !password) {
      throw new InvalidDatesUser()
    }

    const id : string=generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  } catch (error:any) {
    throw new Error(error.message);
  }
    
  }
  async get():Promise<any>{
    try {
      const userDatabase = new UserDatabase()
      return await  userDatabase.getAll()
    } catch (error:any) {
      throw new Error(error.message);
    }
   
  }
}
