import { LoginInputDTO, UserInputDTO } from "../../model/User";

export interface UserRepository{
	signup(input:UserInputDTO):Promise<string>
	login(input:LoginInputDTO):Promise<string>
}