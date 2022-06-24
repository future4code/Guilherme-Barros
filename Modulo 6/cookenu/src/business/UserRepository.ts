import { login } from "../types/login";
import { recipe } from "../types/recipe";
import { follow, user } from "../types/user";

export interface UserRepository{
	createUser(user:user):Promise<string>
	login(login:login):Promise<string>
	getUserData(token:string):Promise<user>
	follow(follow:follow,token:string):Promise<void>
	getUserById(id:string,token:string):Promise<user>
	unfollow(id:string,token:string):Promise<void>
	getFeed(token:string):Promise<recipe[]>
	deleteAccount(id:string,token:string):Promise<void>
}