import { productMock, searchName, searchTag } from './../mocks/Products/index';
import { productBusiness, productDatabase, products, searchId, token } from "../mocks/Products";

describe("Testes da Entidade Produto",()=>{
	test("Insert - sucesso",async()=>{
		

		try {
			await productBusiness.insert(products,token)
			
			expect(productDatabase.insert).toHaveBeenCalled()
			expect(productDatabase.insertTags).toHaveBeenCalled()
		} catch (error) {
			console.log(error);
			
		}
	})
	test("Insert - fracasso por token inválido",async()=>{
	
		const token=""

		try {
			await productBusiness.insert(products,token)
				
		} catch (error:any) {
			expect(error.message).toBe("Por favor, passe o token no header da requisição")
		}
	})
	test("Insert - fracasso por produtos inválidos - sem o name",async()=>{
	
		
		const product=[{id:4,name:'',tags:["colorido", "metal"]}]
		try {
			await productBusiness.insert(product,token)
				
		} catch (error:any) {
			expect(error.message).toBe("Produto inválido")
		}
	})
	test("Insert - fracasso por produtos inválidos - sem tag",async()=>{
		expect.assertions(1)
		
		const product=[{id:2,name:'VESTIDO CURTO MANGA LONGA LUREX',tags:[]}]
		try {
			await productBusiness.insert(product,token)
				
		} catch (error:any) {
			expect(error.message).toBe("Produto inválido")
		}
	})
	test("Insert - fracasso por produtos inválidos - produto já inserido",async()=>{
		
		
		const product=[{id:7,name:'VESTIDO CURTO MANGA LONGA LUREX',tags:["colorido", "metal"]}]
		try {
			await productBusiness.insert(product,token)
				
		} catch (error:any) {
			expect(error.message).toBe("Produto já inserido")
		}
	})
	test("Search By Id",async()=>{
	
		try {
			const res=await productBusiness.searchById(searchId,token)
			expect(res).toEqual({
			productMock	
			})
		} catch (error) {
			console.log(error);
			
		}
	})
	test("Search By Id - fracasso por falta de token",async()=>{
		
		const token=""
		try {
			await productBusiness.searchById(searchId,token)
			
		} catch (error:any) {
			expect(error.message).toBe("Por favor, passe o token no header da requisição")
			
		}
	})
	test("Search By Id - fracasso por nenhum resultado encontrado",async()=>{
		
		
		try {
			await productBusiness.searchById(searchId,token)
			
		} catch (error:any) {
			
			expect(error.message).toBe("Id inválido ou produto não encontrado")
			
		}
	})
	test("Search By Name",async()=>{
	
		try {
			const res=await productBusiness.searchByName(searchName,token)
			expect(res).toEqual({
			productMock	
			})
		} catch (error) {
			console.log(error);
			
		}
	})
	test("Search By Name - fracasso por falta de token",async()=>{
	
		const token=""
		try {
			await productBusiness.searchByName(searchName,token)
			
		} catch (error:any) {
			expect(error.message).toBe("Por favor, passe o token no header da requisição")
			
		}
	})
	test("Search By Name - fracasso por nenhum resultado encontrado",async()=>{
		
		
		try {
			await productBusiness.searchByName(searchName,token)
			
		} catch (error:any) {
			
			expect(error.message).toBe("Nome inválido ou produto não encontrado")
			
		}
	})
	test("Search By Tag",async()=>{
	
		try {
			const res=await productBusiness.searchByTag(searchTag,token)
			expect(res).toEqual({
			productMock	
			})
		} catch (error) {
			console.log(error);
			
		}
	})
	test("Search By Tag - fracasso por falta de token",async()=>{

		const token=""
		try {
			await productBusiness.searchByTag(searchTag,token)
			
		} catch (error:any) {
			expect(error.message).toBe("Por favor, passe o token no header da requisição")
			
		}
	})
	test("Search By Tag - fracasso por nenhum resultado encontrado",async()=>{
		
		
		try {
			await productBusiness.searchByTag(searchTag,token)
			
		} catch (error:any) {
			
			expect(error.message).toBe("Tag inválida ou produto não encontrado")
			
		}
	})
})