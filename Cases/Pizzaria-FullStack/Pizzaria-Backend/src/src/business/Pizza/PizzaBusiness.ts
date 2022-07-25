import { InvalidName } from './../../error/CustomError';
import { PizzaDatabase } from "../../data/Pizza/PizzaDatabase";
import { UserDatabase } from "../../data/User/UserDatabase";
import { CustomError } from "../../error/CustomError";
import { pizza, Pizza, PizzaInputDTO } from "../../model/Pizza";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { PizzaRepository } from "./PizzaRepository";

export class PizzaBusiness implements PizzaRepository{
	constructor(
		private pizzaDatabase: PizzaDatabase,
		private userDatabase: UserDatabase,
		private authenticator: Authenticator,
		private idGenerator: IdGenerator
	      ) {}
	async create(input: PizzaInputDTO,token:string): Promise<void> {
		try {
			if (!token) {
				throw new CustomError(401,"Por favor, passe o token no header da requisição");
			}
			const {name,price,img_url,ingredients}=input
			if(!name || !price || !ingredients || !img_url){
				throw new CustomError(422,"Faltam parâmetros na requisição que devem ser completados para a criação da Pizza");
			}
			const pizzaByName:Pizza=await this.pizzaDatabase.getByName(name)
			if (pizzaByName) {
				throw new InvalidName();
			}
			const authData=this.authenticator.getData(token)
			if(!authData){
				throw new Error("Token inválido ou não passado")
			     }
			     if(authData.role!=="ADMIN"){
				throw new Error("Usuário não autorizado")
			     }
			     const id = this.idGenerator.generate();
			     const pizza:pizza={
				id,
				name,
				price,
				img_url,
				ingredients
			     }
			     await this.pizzaDatabase.create(pizza)
		} catch (error: any) {
			throw new Error(error.sqlMessage || error.message)
		      }
	}
	async getAll(token: string): Promise<Pizza[] | []> {
	    try {
		if (!token) {
			throw new CustomError(401,"Por favor, passe o token no header da requisição");
		}
		const pizzas=await this.pizzaDatabase.getAll()
		if (!pizzas) {
			throw new CustomError(404,"Sem pizzas no momento!");
			
		}
		return pizzas
	    } catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	async getById(id: string,token:string): Promise<Pizza> {
	    try {
		if (!token) {
			throw new CustomError(401,"Por favor, passe o token no header da requisição");
		}
		const pizza:Pizza= await this.pizzaDatabase.getById(id)
		if (!pizza) {
			throw new CustomError(404,"Pizza não encontrada ou id inválido");
		}
		return pizza
	    }  catch (error: any) {
		throw new Error(error.sqlMessage || error.message)
	      }
	}
	
}