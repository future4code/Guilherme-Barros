export class CustomError extends Error {
	constructor(statusCode: number, message: string){
	    super(message)
	}
    }
    export class InvalidEmail extends CustomError{ 
	constructor(){
	    super(400, "Email inválido")
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
	export class InvalidType extends CustomError{
		constructor(){
			super(400,'Tipo inválido')
		}
	}
	export class NotFoundPosts extends CustomError{
		constructor(){
			super(404,"Não foi encontrado posts com esse tipo")
		}
	}