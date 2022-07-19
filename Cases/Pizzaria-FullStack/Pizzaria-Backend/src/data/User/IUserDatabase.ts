import { User, user } from "../../model/User";

export interface IUserDatabase{
	signup(user:user):Promise<void>
	getByEmail(email:string):Promise<User>
}