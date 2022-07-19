export class CustomError extends Error {
	constructor(statusCode: number, message: string){
	    super(message)
	}
    }
export class InvalidDatesUser extends CustomError {
	constructor() {
		super(400,"Dados inválidos (email, name, password)")
	}
}