import { InvalidEmail, InvalidName, InvalidPassword } from "../error/CustomError";
import { user } from "../types/user";



export class User{
	constructor(
	private id: string,
	private name: string,
	private email: string,
	private password: string,
	private role: UserRole
	){
		if(id) this.setId(id)
		if(name) this.setName(name)
		if(email) this.setEmail(email);
		if(role) this.setRole(role);
		if(password) this.setPassword(password);
	}
    
	getId(){
	    return this.id;
	}
    
	getName(){
	    return this.name
	}
    
	getEmail(){
	    return this.email;
	}
    
	getPassword(){
	    return this.password;
	}
    
	getRole(){
	    return this.role;
	}
    
	setId(id: string){
	    this.id = id;
	}
    
	setName(name: string){
		if (name.length < 4) {
			throw new InvalidName();
			  }
			  if (typeof name !== 'string') {
			    throw new InvalidName()
		    }
		this.name = name;
	}
    
	setEmail(email: string){
	if (!email.includes("@")) {
		throw new InvalidEmail();
	  }
				  
	    this.email = email;
	}
    
	setPassword(password: string){
		if(password.length<6){
			throw new InvalidPassword();
		    }
		this.password = password;
	}
    
	setRole(role: UserRole){
	    this.role = role;
	}
    
       static stringToUserRole(input: string): UserRole{
	    switch (input) {
		case "NORMAL":
		  return UserRole.NORMAL;
		case "ADMIN":
		  return UserRole.ADMIN;
		default:
		  throw new Error("Invalid user role");
	      }
	}
	static toUserModel(user: user): User {
	    return new User(user.id, user.name, user.email, user.password, User.stringToUserRole(user.role));
	  }
    
    }
 
    export interface UserInputDTO{
	email: string;
	password: string;
	name: string;
	role: string;
    }
    
    export interface LoginInputDTO{
	email: string;
	password: string;
    }
    
    export enum UserRole{
	NORMAL = "NORMAL",
	ADMIN = "ADMIN"
    }