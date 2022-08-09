export class CustomError extends Error{
	constructor(public code:number,message:string){
		super(message)
	}
}
export class InvalidName extends CustomError{
	constructor(){
		super(401,"Nome inválido")
	}
}
export class InvalidLastName extends CustomError{
	constructor(){
		super(401,"Sobrenome inválido")
	}
}
