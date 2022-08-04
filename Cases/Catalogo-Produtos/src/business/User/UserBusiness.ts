import { UserDatabase } from "../../data/User/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../../error/CustomError";
import { UserInputDTO, LoginInputDTO, User, UserRole } from "../../model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export class UserBusiness implements UserRepository{
	constructor(
		private idGenerator: IdGenerator,
		private hashManager: HashManager,
		private userDatabase: UserDatabase,
		private authenticator: Authenticator
	){}
	async signup(input: UserInputDTO): Promise<string>  {
		
		try {
		    if (!input.name || !input.email || !input.password || !input.role) {
					throw new CustomError(
					  400,
					  'Preencha os campos "name", "email" e "password" e "role"'
					);
				      }
			
		
		    const id = this.idGenerator.generate();
			
		
		    const hashPassword = await this.hashManager.hash(input.password);
	    
		
		    const user=new User(
			id,
			input.email,
			input.name,
			hashPassword,
			input.role as UserRole
		    )
		    await this.userDatabase.signup(user);
	    
		
		    const accessToken = this.authenticator.generateToken({ id, role: input.role });
	    
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
			
			const userFromDB = await this.userDatabase.getByEmail(input.email);
		
			if (!userFromDB) {
			    throw new UserNotFound();
			} 
		
			
			const hashCompare = await this.hashManager.compare(input.password, userFromDB.getPassword());
			if(!hashCompare){
			    throw new InvalidPassword();
			}
			const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });
		
			return accessToken;
		}catch (error: any) {
				throw new Error(error.sqlMessage || error.message)
			      }
			}
	
	
}