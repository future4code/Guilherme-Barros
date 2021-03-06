import { comment } from './../types/Comment';
import { friendship } from './../types/Friendship';
import { user } from "../types/User";
import { post } from '../types/Post';
import { Like } from '../types/Like';

export interface UserRepository{
	insertUser(user:user):Promise<void>
	insertFriendship(friendship:friendship):Promise<void>
	deleteFriendship(friend_id:string):Promise<void>
	getFeed(size:number,offset:number):Promise<post[]>
	getPostByType(type:string):Promise<post[]>
	publishComment(comment:comment):Promise<void>
	likePost(like:Like):Promise<void>
	deslikePost(post_id:string):Promise<void>
}