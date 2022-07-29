import { UserInputDTO, LoginInputDTO } from "../../model/User";
import { UserRepository } from "./UserRepository";

export class UserBusiness implements UserRepository{
	signup(input: UserInputDTO): Promise<string> {
		throw new Error("Method not implemented.");
	}
	login(input: LoginInputDTO): Promise<string> {
		throw new Error("Method not implemented.");
	}
	
}