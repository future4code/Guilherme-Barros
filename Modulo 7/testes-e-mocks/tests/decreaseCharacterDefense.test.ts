import { decreaseCharacterDefense } from '../src/decreaseCharacterDefense';
import { mockFalse } from '../src/mocks/mockFalse';
import { mockTrue } from '../src/mocks/mockTrue';
import { Character } from './../src/model/characters';
describe('Testes da função de diminuição de defesa', () => 
{ 
	it("Deve retornar novo valor da defesa do personagem",()=>{
		const character:Character={
		nome:"Sub-Zero",
		vida:1500,
		defesa:700,
		forca:800
		}
		decreaseCharacterDefense(character,500,mockTrue)
		expect(character.defesa).toBe(500)
		expect(mockTrue).toHaveBeenCalledTimes(1);
		
	})
	it("Deve retornar erro por defesa maior que a atual",()=>{
		const character:Character={
			nome:"Scorpion",
			vida:1500,
			defesa:700,
			forca:800
			}
			try {
				decreaseCharacterDefense(character,800,mockTrue)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Defense")
		
			}	
	})

	it("Deve retornar erro por personagem inválido",()=>{
		const character:Character={
			nome:"Raiden",
			vida:1500,
			defesa:700,
			forca:800
			}
			try {
				decreaseCharacterDefense(character,400,mockFalse)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Character")
		expect(mockFalse).toHaveBeenCalled();
		expect(mockFalse).toHaveBeenCalledTimes(1);
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
				decreaseCharacterDefense(character,400,mockFalse)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Character")
		expect(mockFalse).toHaveBeenCalled();
		expect(mockFalse).toHaveBeenCalledTimes(2);
			}
	})
})	

 