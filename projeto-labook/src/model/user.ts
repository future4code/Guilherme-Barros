export interface UserInputDTO {
	name: string,
	email: string,
	password: string
     }
export interface FriendshipInputDTO{
	user_id:string,
	friend_id:string
}
export interface FriendshipInputDeleteDTO{
	friend_id:string
}