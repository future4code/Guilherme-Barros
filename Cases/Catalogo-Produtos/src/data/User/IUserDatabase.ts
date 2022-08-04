import { User } from "../../model/User";
import { user } from "../../types/user";


export interface IUserDatabase{
	signup(user:User):Promise<void>
	getByEmail(email:string):Promise<User>
}