import { login } from "../types/login";
import { user } from "../types/user";

export interface UserRepository{
	createUser(user:user):Promise<string>
	login(login:login):Promise<string>
}