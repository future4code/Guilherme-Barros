import { ROLE } from "../business/ports";

export class User {
	constructor(
		private id:string,
	    private name: string,
	    private email: string,
	    private password: string,
	    private role:ROLE
	) {
	    // validar dados passados
	    this.validateName(name);
	    this.validateEmail(email);
	    this.validatePassword(password);
	    this.validateRole(role)
	}
    
	getId(){
		return this.id
	}
	getName(){
		return this.name
	}
	getEmail(){
		return this.email
	}
	getPassword(){
		return this.password
	}
	getRole(){
		return this.role
	}
	validateName(name: string){
	    // lança um erro se name for inválido
	    if (name.length < 4) {
		throw new Error("Nome inválido. Nome deve ter ao menos 4 caracteres");
	    }
	    if (typeof name !== "string") {
		throw new Error("Nome inválido. Nome deve ser uma cadeira de caracteres");
	    }
	}
	validateEmail(email:string){
		if (!email.includes("@")) {
			throw new Error("Email inválido. Email deve possuir um @");
		}
		if (!email.includes(".com")) {
			throw new Error("Email inválido. Email deve possuir .com");
		}
	if (typeof email !== "string") {
			throw new Error("Email inválido. Email deve ser uma cadeia de caracteres");
		}
	}
	validatePassword(password:string){
		if (typeof password !== "string") {
			throw new Error("Senha inválida. Senha deve ser uma cadeia de caracteres");
		}
		if (password.length<6) {
			throw new Error("Senha inválida. Senha deve possuir ao menos 6 caracteres");
		}
	}
	validateRole(role:ROLE){
		if(role !== ROLE.ADMIN && role !== ROLE.NORMAL){
			throw new Error("Role inválido. Role deve ser ADMIN ou NORMAL");
		}
	}
    }