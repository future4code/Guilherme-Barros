import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import { FollowerInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { UserRepository } from "./UserRepository";
import { IdGenerator } from "../service/generatorId";
import { follow, user } from "../types/user";
import { TokenGenerator } from "../service/generatorToken";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../service/hashManager";
import { recipe } from "../types/recipe";


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
	getUserData=async(token: string): Promise<user>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		const userDatabase=new UserDatabase()
		const authData=tokenGenerator.tokenData(token)

		const user = await userDatabase.getUserById(authData.id)

		return user
	    }catch (error:any) {
		throw new Error(error.message);
	}
	}
	follow=async(input: FollowerInputDTO,token:string): Promise<void> =>{
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		const {followId}=input
		
		if (!followId) {
			throw new CustomError(400,"Por favor, passe o id do Usuário que queira seguir");
		}
		const id: string = Idgenerator.generateId();
		const userDatabase=new UserDatabase()
		const authData=tokenGenerator.tokenData(token)

		const user = await userDatabase.getUserById(authData.id)
		const follow:follow={
			id,
			userId:user.id,
			followId
		}
		await userDatabase.followUser(follow)


	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
	getUserById(id: string,token:string): Promise<user> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		const userDatabase=new UserDatabase()
		const user = userDatabase.getUserById(id)
		return user
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
	unfollow=async(id:string,token:string):Promise<void>=>{
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}
			if (!id) {
				throw new CustomError(400,"Por favor, passe o id do Usuário que queira deixar de seguir");
			}
			const userDatabase=new UserDatabase()
			const unfollowedUser= await userDatabase.getFollowById(id)
			if (!unfollowedUser) {
				throw new CustomError(404,"O usuário com o id passado não está sendo seguido");
				
			}
		}catch (error:any) {
			throw new Error(error.message);
		}
	}
	getFeed=async(token: string): Promise<recipe[]>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		const userDatabase=new UserDatabase()
		const authData=tokenGenerator.tokenData(token)

		const user = await userDatabase.getUserById(authData.id)
		if (!user) {
			throw new CustomError(404,"Usuário não encontrado");
			
		}
		const recipes=await userDatabase.getFeed()
		return recipes
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
}