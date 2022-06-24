export interface UserInputDTO{
	name:string,
	email:string,
	password:string,
	role:string
}
export interface LoginInputDTO{
	email:string,
	password:string,
	role:string
}
export interface FollowerInputDTO{
	followId:string
}