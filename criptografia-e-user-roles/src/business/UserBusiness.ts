import { UserDatabase } from './../data/UserDatabase';
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  LoginInputDTO,
} from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()
const userDatabase = new UserDatabase();
const hashManager=new HashManager()

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password,role } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      const hashPassword = await hashManager.generateHash(password)
      const id: string = idGenerator.generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password:hashPassword,
        role
      };
   
      await userDatabase.insertUser(user);
      const inputToken={
        id,
        role
      }
      const token = tokenGenerator.generateToken(inputToken)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;
    
      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos"email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      const compare=await hashManager.comparePassword(password,user.password)

      if (!user) {
        throw new UserNotFound()
      }

      if(password !== user.password){ 
        throw new InvalidPassword()
      }
      if (!compare) {
        throw new InvalidPassword()
      }
      const inputToken={
        id:user.id,
        role:user.role
      }
      const token = tokenGenerator.generateToken(inputToken)
     
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserData=async(token:string): Promise<any>=> {
		try {
			if (!token) {
				throw new CustomError(400,"Por favor, passe o token no header da requisição");
			}

			const userDatabase = new UserDatabase();
			
			const authenticationData = tokenGenerator.tokenData(token);
      if (authenticationData.role !== "normal") {
        throw new Error("Only a normal user can access this funcionality");
      }

			const user = await userDatabase.getUserById(authenticationData.id);


			return user
		} catch (error: any) {
			throw new CustomError(400, error.message);
		      }
	      }
}
