import { Character } from "../src/model/characters"
import { performAttackInversionDependency } from "../src/performAttack"
import { validateCharacter } from "../src/validateCharacter"

describe("Testes e mocks da função que valida um personagem",()=>{
	
	test("teste que verifique o comportamento da função com um personagem com o nome vazio",()=>{
		const character:Character={
			nome:"",
			vida:10,
			defesa:20,
			forca:10
		}
		const result= validateCharacter(character)
		expect(result).toBe(false)
	})
	test("teste que verifique o comportamento da função com um personagem com a vida igual a zero",()=>{
		const character:Character={
			nome:"Ryu",
			vida:0,
			defesa:20,
			forca:10
		}
		const result= validateCharacter(character)
		expect(result).toBe(false)
	})
	test("teste que verifique o comportamento da função com um personagem com a força igual a zero",()=>{
		const character:Character={
			nome:"Ryu",
			vida:10,
			defesa:20,
			forca:0
		}
		const result= validateCharacter(character)
		expect(result).toBe(false)
	})
	test("teste que verifique o comportamento da função com um personagem com a defesa igual a zero",()=>{
		const character:Character={
			nome:"Ryu",
			vida:10,
			defesa:0,
			forca:10
		}
		const result= validateCharacter(character)
		expect(result).toBe(false)
	})
	test("teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo",()=>{
		const character:Character={
			nome:"Ryu",
			vida:10,
			defesa:-5,
			forca:10
		}
		const result= validateCharacter(character)
		expect(result).toBe(false)
	})
	test("teste que verifique o comportamento da função com um personagem com as informações validas",()=>{
		const character:Character={
			nome:"Ryu",
			vida:100,
			defesa:40,
			forca:70
		}
		const result= validateCharacter(character)
		expect(result).toBe(true)
	})
})
