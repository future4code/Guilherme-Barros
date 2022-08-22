import { participantMock } from './../mocks/index';
import { idGenerator, input, participantBusiness, participantDatabase } from "../mocks"

describe("Testes para a entidade Participant",()=>{
	it("Insert Participants - success",async()=>{
		try {
			await participantBusiness.insert(input)
			expect(participantDatabase).toHaveBeenCalled()

		}  catch (error:any) {
			console.log(error);
			}
	})
	it("Insert Participants - fail - input without id",async()=>{
		try {

			const input={
				id:"",
				name:"any",
				lastName:"any",
				participation:0
			}
			await participantBusiness.insert(input)
		} catch (error:any) {
			expect(error.message).toBe("Parâmetros faltando para a criação de um participante")
		}
	})
	it("Insert Participants - fail - input without name",async()=>{
		try {
			const id=idGenerator.generate()
			const input={
				id,
				name:"",
				lastName:"any",
				participation:0
			}
			await participantBusiness.insert(input)
		} catch (error:any) {
			expect(error.message).toBe("Parâmetros faltando para a criação de um participante")
		}
	})
	it("Insert Participants - fail - input without lastName",async()=>{
		try {
			const id=idGenerator.generate()
			const input={
				id,
				name:"any",
				lastName:"",
				participation:0
			}
			await participantBusiness.insert(input)
		} catch (error:any) {
			expect(error.message).toBe("Parâmetros faltando para a criação de um participante")
		}
	})
	it("Insert Participants - fail - participation negative",async()=>{
		try {
			const id=idGenerator.generate()
			const input={
				id,
				name:"anyName",
				lastName:"anyLastName",
			participation:-2
			}
			await participantBusiness.insert(input)
		} catch (error:any) {
			expect(error.message).toBe("Participação inválida")
		}
	})
	it("Get All - success",async()=>{
		try {
			const res=await participantBusiness.getAll()
			expect(res).toEqual({
				participantMock	
				})
		} catch (error:any) {
			console.log(error);
		}
	})
	it("Get All - fail - not found",async()=>{
		try {
			await participantBusiness.getAll()

		} catch (error:any) {
			expect(error.message).toBe("Nenhum participante cadastrado")
		}
	})
})