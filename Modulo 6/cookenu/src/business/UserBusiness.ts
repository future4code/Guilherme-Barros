import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import { LoginInputDTO, UserInputDTO } from "../model/user";
import { UserRepository } from "./UserRepository";
import { IdGenerator } from "../service/generatorId";
import { user } from "../types/user";
import { TokenGenerator } from "../service/generatorToken";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../service/hashManager";


const tokenGenerator = new TokenGenerator()

const hashManager=new HashManager()
const Idgenerator=new IdGenerator()
export class UserBusiness implements UserRepository{
	
	public createUser=async(input:UserInputDTO):Promise<string>=> {
		try {
			const { name, email, password } = input;

			if (!name || !email || !password) {
				throw new CustomError(
				  400,
				  'Preencha os campos "name", "email" e "password"'
				);
			      }
			
			      if (name.length < 4) {
				throw new InvalidName();
			      }
			
			      if (!email.includes("@")) {
				throw new InvalidEmail();
			      }
			      if(password.length<6){
				      throw new InvalidPassword();
			      }
			 const hashPassword=await hashManager.generateHash(password)    
			      const id: string = Idgenerator.generateId();

			      const user: user = {
				id,
				name,
				email,
				password:hashPassword,
			      };
			      const userDatabase = new UserDatabase();
			    await userDatabase.createUser(user)

			      const token = tokenGenerator.generateToken(id)
			      return token
	
		}  catch (error:any) {
			throw new Error(error.message);
		}	
	}
	public login=async(input:LoginInputDTO):Promise<string>=> {
		try {
			const {email,password}=input

			if (!email || !password) {
				throw new CustomError(400,'Preencha todos os campos da requisição')
			}
			if (!email.includes("@")) {
				throw new InvalidEmail();
			}
			const userDatabase = new UserDatabase();
			const user= await userDatabase.findUserByEmail(email)
			if (!user) {
				throw new UserNotFound();
			}
			
			const compare=await hashManager.comparePassword(password,user.password)

			if (!compare) {
				throw new InvalidPassword();
			}
			const token=tokenGenerator.generateToken(user.id)
			return token
		}  catch (error:any) {
			throw new Error(error.message);
		}
	}
}