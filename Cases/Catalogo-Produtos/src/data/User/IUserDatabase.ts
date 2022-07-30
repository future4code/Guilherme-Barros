import { User } from "../../model/User";
import { user } from "../../types/user";


export interface IUserDatabase{
	signup(user:user):Promise<void>
	getByEmail(email:string):Promise<User>
}