export type User = {
	id:string,
	name: string,
  email: string,
  password: string
}
export interface createUserDTO{
	name: string,
  email: string,
  password: string
}