import { user } from "../types/User";

export interface UserRepository{
	insertUser(user:user):Promise<void>
}