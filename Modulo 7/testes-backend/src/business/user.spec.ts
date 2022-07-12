import { userMock, userMock2 } from './../common/mocks/mocks';
import { UserRepositoryMock } from "../common/mocks/mocks";
import getAllUsers from "../presentation/getAllUsers";
import { ROLE } from "./ports";

const userRepositoryMock = new UserRepositoryMock()
describe("Testes de unidade de getUserById",()=>{
	//a)
	it("Erro de usuário não existente",()=>{
		expect.assertions(2)

		try {
		  userRepositoryMock.getUserById("abc")
		} catch (error: any) {
		  expect(error.statusCode).toBe(404)
		  expect(error.message).toBe("User not found")
		}
	})
	it("Resposta de sucesso",()=>{
		expect.assertions(2)
    
		try {
		  const getUserById = jest.fn(
		    (id: string) =>  userRepositoryMock.getUserById(id)
		  )
		    
		  const result =  getUserById("id_mock_admin")
	    
		  expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
		  expect(result).toEqual({
		    id: "id_mock_admin",
		    name: "astrodev",
		    email: "astrodev@gmail.com",
		    role: "ADMIN",
		  })
		} catch (error: any) {
		  console.log(error.message)
		}
	})
})
describe("Testes de unidade de getAllUsers",()=>{
	it("Erro de  não autorizado",()=>{
		expect.assertions(1)
		try {

			const getAllUsers=jest.fn((role:ROLE)=>userRepositoryMock.getAllUsers(role))
			
			expect(getAllUsers).toHaveBeenCalledWith(ROLE.NORMAL)
			
		} catch (error: any) {
			expect(error.message).toBe("You must be an admin to access this endpoint")
		      }
	})
	it("Resposta de sucesso",()=>{
		try {
			const getAllUsers=jest.fn((role:ROLE)=>userRepositoryMock.getAllUsers(role))
			const result=getAllUsers(ROLE.ADMIN)
			expect(result).toEqual([userMock,userMock2])
		}catch (error: any) {
			console.log(error.message)
		      }
	})
})
describe("Teste de unidade getProfile",()=>{
	it("Resposta de erro caso usuário não exista ou id seja inválido",()=>{
		expect.assertions(1)
		try {
			const getProfile=jest.fn((id:string)=>userRepositoryMock.getProfile(id))
			expect(getProfile).toHaveBeenCalledWith("id_mockado")

		} catch (error:any) {
			expect(error.message).toBe("Id inválido ou Usuário não existe")
		}
	})
	it("Resposta de sucesso",()=>{
		try {
			const getProfile=jest.fn((id:string)=>userRepositoryMock.getProfile(id))
			const result=getProfile("id_mockado")
			expect(getProfile).toHaveBeenCalledWith("id_mockado")
			expect(result).toEqual({
				id:"id_mockado",
				name:"flavio",
				email:"flavio@lab.com",
				password:"flavio123",
				role:ROLE.NORMAL
			})
		} catch (error: any) {
			console.log(error.message)
		      }
	})
})