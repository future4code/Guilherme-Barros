export class CustomError extends Error{
	constructor(public code:number,message:string){
		super(message)
	}
}
export class InvalidEmail extends CustomError{
	constructor() {
	  super(400,"Email Inválido")
	}
      }
      export class InvalidName extends CustomError{ 
	constructor(){
	    super(400, "Nome inválido")
	}
	  }
	  export class InvalidPassword extends CustomError{
	    constructor(){
	      super(400,"Senha inválida")
	    }
	}    
     export class UserNotFound extends CustomError{
	  constructor(){
	    super(404,"Usuário não encontrado")
	  }
      }