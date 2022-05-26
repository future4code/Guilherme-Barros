import {v4 as generateId} from "uuid"
import { UserDatabase } from "../data/UserDatabase";
export class UserBusiness{
	public createUser=async(input:any):Promise<void>=> {
		try {
			const {name,email,password}=input

			if (!name || !email || !password) {
				throw new Error("Preencha os campos name, email e password");
			}
			if(email.indexOf("@") === -1){
				throw new Error("Email inválido");
			    }
		
			    if(password.length < 6){
				throw new Error("Senha precisa de ao menos 6 caracteres");
			    }
			const id:string = generateId()
			const userDB=new UserDatabase()
			await userDB.insertUser(
				id,
				name,
				email,
				password
			)
		} catch (error:any) {
			throw new Error(error.message);
			
		}
	}
	
	public getAllUsers=async():Promise<any>=> {
		try {	
			const userDB=new UserDatabase()
			return await userDB.getAllUsers()
			
		} catch (error:any) {
			throw new Error(error.message);
		}
	}


	public deleteUser=async(id:string):Promise<void>=> {
		try {
			if (!id) {
				throw new Error("Preencha o campo id");
			}
			const userDB=new UserDatabase()
			await userDB.deleteUser(id)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
}