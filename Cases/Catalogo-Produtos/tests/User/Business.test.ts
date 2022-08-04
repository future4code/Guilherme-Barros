
import { idGenerator,  userBusiness,  userDatabase } from "../mocks/User"

describe("Testes da Entidade User",()=>{
	it("Signup - sucesso",async()=>{
		
		
		const id=idGenerator.generate()
		const input={
			id:id,
			name: 'any_name',
			email: 'any_email@email.com',
			password: 'any_password',
			role: 'ADMIN'
		}
		
		try {
			
		const res=await userBusiness.signup(input)
		expect(res).toBe("token")
			expect(userDatabase.signup).toHaveBeenCalled()
		} catch (error:any) {
		console.log(error);
		
		}
	})
	it("Signup - fracasso faltando o nome",async()=>{
		
		const id=idGenerator.generate()
		const input={
			id:id,
			name: '',
			email: 'any_email@email.com',
			password: 'any_password',
			role: 'ADMIN'
		}

		try {
			await userBusiness.signup(input)
		} catch (error:any) {
			expect(error.message).toBe(
				'Preencha os campos "name", "email" e "password" e "role"'
			      )
		}
	})
	it("Signup - fracasso faltando o email",async()=>{
		
		const id=idGenerator.generate()
		const input={
			id:id,
			name: 'any_name',
			email: '',
			password: 'any_password',
			role: 'ADMIN'
		}

		try {
			await userBusiness.signup(input)
		} catch (error:any) {
			expect(error.message).toBe(
				'Preencha os campos "name", "email" e "password" e "role"'
			      )
		}
	})
	it("Signup - fracasso faltando a senha",async()=>{
		
		const id=idGenerator.generate()
		const input={
			id:id,
			name: 'any_name',
			email: 'any_email@email.com',
			password: '',
			role: 'ADMIN'
		}

		try {
			await userBusiness.signup(input)
		} catch (error:any) {
			expect(error.message).toBe(
				'Preencha os campos "name", "email" e "password" e "role"'
			      )
		}
	})
	it("Signup - fracasso faltando a role",async()=>{
	
		const id=idGenerator.generate()
		const input={
			id:id,
			name: 'any_name',
			email: 'any_email@email.com',
			password: 'any_password',
			role: ''
		}

		try {
			await userBusiness.signup(input)
		} catch (error:any) {
			expect(error.message).toBe(
				'Preencha os campos "name", "email" e "password" e "role"'
			      )
		}
	})
	it("Login - sucesso",async()=>{
	
		const input={
			email: 'any_email',
			password: 'any_password',	
		}

		try {
			
			const res=await userBusiness.login(input)

		expect(res).toBe("token")
			expect(userDatabase.getUserByEmail).toHaveBeenCalled()

		} catch (error:any) {
			
		}
		
	})
	it("Login - fracasso faltando o email",async()=>{
	
		const input={
			email: '',
			password: 'any_password',	
		}

		try {
			await userBusiness.login(input)
		

		} catch (error:any) {
			expect(error.message).toBe(
				'Preencha todos os campos da requisição'
			      )
		}
		
	})
	it("Login - fracasso faltando a senha",async()=>{
	
		const input={
			email: 'any_email',
			password: '',	
		}

		try {
			await userBusiness.login(input)
		

		} catch (error:any) {
			expect(error.message).toBe(
				'Preencha todos os campos da requisição'
			      )
		}
		
	})
})