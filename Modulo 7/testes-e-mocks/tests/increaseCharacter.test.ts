import { increaseCharacterStrength } from "../src/increaseCharacterStrength"
import { mockFalse } from "../src/mocks/mockFalse"
import { mockTrue } from "../src/mocks/mockTrue"
import { Character } from "../src/model/characters"

describe('Testes da função de aumento de força', () => 
{ 
	it("Deve retornar novo valor da força do personagem",()=>{
		const character:Character={
		nome:"Scorpion",
		vida:1500,
		defesa:700,
		forca:800
		}
		increaseCharacterStrength(character,1000,mockTrue)
		expect(character.forca).toBe(1000)
		expect(mockTrue).toHaveBeenCalledTimes(1);
		
	})
	it("Deve retornar erro por força menor que a atual",()=>{
		const character:Character={
			nome:"Scorpion",
			vida:1500,
			defesa:700,
			forca:800
			}
			try {
				increaseCharacterStrength(character,500,mockTrue)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Strength")
	
			}	
	})
	it("Deve retornar erro por personagem inválido",()=>{
		const character:Character={
			nome:"",
			vida:1500,
			defesa:700,
			forca:800
			}
			try {
				increaseCharacterStrength(character,400,mockFalse)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Character")
		
			}
	})
	it("Deve retornar erro por personagem inválido",()=>{
		const character:Character={
			nome:"Kung Lao",
			vida:1500,
			defesa:-5,
			forca:800
			}
			try {
				increaseCharacterStrength(character,400,mockFalse)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Character")
		
			}
	})
 })