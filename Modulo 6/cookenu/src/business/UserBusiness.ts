import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import { FollowerInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { UserRepository } from "./UserRepository";
import { IdGenerator } from "../service/generatorId";
import { follow, user } from "../types/user";
import { TokenGenerator } from "../service/generatorToken";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../service/hashManager";
import { recipe } from "../types/recipe";
import generator from 'generate-password'
import transporter from "../service/nodeMailer";

const tokenGenerator = new TokenGenerator()

const hashManager=new HashManager()
const Idgenerator=new IdGenerator()
export class UserBusiness implements UserRepository{
	
	public createUser=async(input:UserInputDTO):Promise<string>=> {
		try {
			const { name, email, password, role } = input;

			if (!name || !email || !password || !role) {
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
				role
			      };
			      const userDatabase = new UserDatabase();
			    await userDatabase.createUser(user)
			    const inputToken={
				id,
				role
			      }
			      const token = tokenGenerator.generateToken(inputToken)
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
			const inputLogin={
				id:user.id,
				role:user.role
			}
			const token=tokenGenerator.generateToken(inputLogin)
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
		
		
		if (!input) {
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
			await userDatabase.unfollow(unfollowedUser.id)
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
		const authData= tokenGenerator.tokenData(token)
		
		
		const user = await userDatabase.getUserById(authData.id)
		
		if (!user) {
			throw new CustomError(404,"Usuário não encontrado");
			
		}
		const recipes=await userDatabase.getFeed(user.id)
		if (recipes.length === 0) {
			throw new CustomError(404,'Nenhuma receita postada ainda');
			
		}
		return recipes
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
	deleteAccount=async(id: string,token:string): Promise<void>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		if (!id) {
			throw new CustomError(400,"Por favor, passe o id do Usuário que queira deletar");
		}
		const userDatabase=new UserDatabase()
		const authData= tokenGenerator.tokenData(token)
		const user = await userDatabase.getUserById(authData.id)
		const userDeleted=await userDatabase.getUserById(id)
		const verifyFollows=await userDatabase.getAllFollows(userDeleted.id)
		const verifyRecipes=await userDatabase.getAllRecipes(userDeleted.id)
	

		if (!user) {
			throw new CustomError(404,"Usuário não encontrado");
			
		}
		if (user.role !== 'ADMIN') {
			throw new CustomError(401,"Você não tem permissão para deletar a conta");
		}
		
		await userDatabase.deleteAllRecipes(userDeleted.id)
		await userDatabase.deleteAllFollows(userDeleted.id)
		await userDatabase.deleteAccount(userDeleted.id)
		
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
	forgotPassword=async( token: string): Promise<void>=> {
	    try {
		if (!token) {
			throw new CustomError(400,"Por favor, passe o token no header da requisição");
		}
		const userDatabase=new UserDatabase()
		const authData= tokenGenerator.tokenData(token)
		const user = await userDatabase.getUserById(authData.id)
		
		const newPassword=generator.generate({
			length:10,
			numbers:true
		})
	
		const hashPassword=await hashManager.generateHash(newPassword)    
		
		await userDatabase.putNewPassword(authData.id,hashPassword)
		await transporter.sendMail({
			from: `${process.env.NODEMAILER_USER}`,
			to: user.email,
			subject: "Senha alterada!",
			text: "Sua senha foi alterada com sucesso!",
			html:`<p>Sua senha foi alterada com sucesso!</p>
			Sua nova senha é ${newPassword}`
		       })
		      
	    } catch (error:any) {
		throw new Error(error.message);
	}
	}
}