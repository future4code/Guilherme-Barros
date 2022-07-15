import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { IHashGenerator, IIdGenerator, ITokenGenerator, IUserRepository, ROLE, user, UserDTO } from "./ports";

export class UserBusiness{
	constructor(
		private idGenerator: IIdGenerator,
		private hashGenerator: IHashGenerator,
		private userRepository: IUserRepository,
		private tokenGenerator: ITokenGenerator,
		private userDatabase: UserDatabase
	){}
	async signup(input:UserDTO):Promise<string>{
		try {
			const {name,email,password,role}=input
			
			const hashedPassword=await this.hashGenerator.hash(password)
			const id=this.idGenerator.generate()
			new User(id,name,email,password,role)
			const user:user={
				id,
				name,
				email,
				password:hashedPassword,
				role
			}
			await this.userDatabase.signup(user)
			return this.tokenGenerator.generate({
				id: user.id,
				role: user.role
			    });
		} catch (error:any) {
			throw new Error(error.message);
			
		}
	}
	async getUserById(id:string){
		try {
			const user=await this.userDatabase.getUserById(id)
			if (!user) {
				throw new Error("Usuário não encontrado");
			}
			return {
				id: user.getId(),
				name: user.getName(),
				email: user.getEmail(),
				role: user.getRole(),
			      };
		} catch (error:any) {
			throw new Error(error.message);
			
		}
	}
	async getAllUsers(role:ROLE):Promise<User[]>{
		try {
			if (role !== ROLE.ADMIN) {
				throw new Error("You must be an admin to access this endpoint"
			       );
			     }
			const users=await this.userDatabase.getAllUsers()
			if(!users){
				throw new Error("Sem usuários");
			}
			return users
		} catch (error:any) {
			throw new Error(error.message);
			
		}
	}
	async getProfile(id:string):Promise<User>{
		try {
			const userDetails=await this.userDatabase.getProfile(id)
			if(!userDetails){
				throw new Error("Id inválido ou Usuário não existe");
			}
			return userDetails
		}  catch (error:any) {
			throw new Error(error.message);
			
		}
	}
}