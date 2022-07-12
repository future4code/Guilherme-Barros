import { User } from '../model/User';
import { AuthenticationData } from './../services/authenticator';


export interface IIdGenerator{
	generate:()=>string
}
export interface IHashGenerator{
	hash:(plaintext:string)=>Promise<string>
	compare:(plainText: string, cypherText: string)=>Promise<boolean>
}
export interface ITokenGenerator{
	generate:(args:AuthenticationData)=>string
	getTokenData:(token:string)=>AuthenticationData
}
export enum ROLE{
	NORMAL="NORMAL",
	ADMIN="ADMIN"
}
export type user={
	id:string,
	name:string,
	email:string,
	password:string,
	role:ROLE
}
export interface UserDTO{
	name:string,
	email:string,
	password:string,
	role:ROLE
}
export interface IUserRepository{
	signup:(user:UserDTO)=>Promise<string>
	getUserById:(id:string)=>Promise<User>
}