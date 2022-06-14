import { post } from "../types/Post";


export interface PostRepository{
	insertPost(post:post):Promise<void>
	getPostById(id:string):Promise<any>
}