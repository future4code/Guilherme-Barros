import { UserDatabase } from "../../data/User/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../../error/CustomError";
import { UserInputDTO, LoginInputDTO } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { user } from "../../types/user";
import { UserRepository } from "./UserRepository";

export class UserBusiness implements UserRepository{
	async signup(input: UserInputDTO): Promise<string>  {

		try {
		    if (!input.name || !input.email || !input.password || !input.role) {
					throw new CustomError(
					  400,
					  'Preencha os campos "name", "email" e "password"'
					);
				      }
			  if (input.name.length < 4) {
			    throw new InvalidName();
			      }
			      if (!input.email.includes("@")) {
				throw new InvalidEmail();
				  }
				  if(input.password.length<6){
				      throw new InvalidPassword();
				  }
		    const idGenerator = new IdGenerator();
		    const id = idGenerator.generate();
	    
		    const hashManager = new HashManager();
		    const hashPassword = await hashManager.hash(input.password);
	    
		    const userDatabase = new UserDatabase();
		    const user:user={
			id,
			email:input.email,
			name:input.name,
			password:hashPassword,
			role:input.role
		    }
		    await userDatabase.signup(user);
	    
		    const authenticator = new Authenticator();
		    const accessToken = authenticator.generateToken({ id, role: input.role });
	    
		    return accessToken;
		}  catch (error:any) {
				throw new Error(error.message);
			}	
	
	       
	    }
	async login(input: LoginInputDTO): Promise<string> {
		try {
			if (!input.email || !input.password) {
			    throw new CustomError(400,'Preencha todos os campos da requisição')
			}
			if (!input.email.includes("@")) {
			    throw new InvalidEmail();
			      }
			const userDatabase = new UserDatabase();
			const userFromDB = await userDatabase.getByEmail(input.email);
		
			if (!userFromDB) {
			    throw new UserNotFound();
			} 
		
			const hashManager = new HashManager();
			const hashCompare = await hashManager.compare(input.password, userFromDB.getPassword());
			if(!hashCompare){
			    throw new InvalidPassword();
			}
			const authenticator = new Authenticator();
			const accessToken =authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });
		
			return accessToken;
		}catch (error: any) {
				throw new Error(error.sqlMessage || error.message)
			      }
			}
	
	
}