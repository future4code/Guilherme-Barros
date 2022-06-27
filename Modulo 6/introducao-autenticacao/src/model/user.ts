export type User={
	id:string,
	email:string,
	password:string
}
export interface UserInputDTO {
	email: string,
	password: string
     }
export interface LoginInputDTO{
	email:string,
	password:string
}