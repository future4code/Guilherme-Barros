import { mockTrue } from './../src/mocks/mockTrue';
import { mockFalse } from "../src/mocks/mockFalse"
import { Character } from "../src/model/characters"
import { recoverCharacters } from "../src/recoverCharacters"

describe('Testes da função de regeneração de vida', () => 
{ 
	it("Deve retornar novo valor da vida dos personagens",()=>{
		const characters:Character[]=[{
		nome:"Sub-Zero",
		vida:1000,
		defesa:700,
		forca:800
		},
		{
			nome:"Ryu",
			vida: 1300,
			defesa: 200,
			forca: 600,
		}]
		
		recoverCharacters(characters,mockTrue)
		expect(characters[0].vida).toBe(1500)
		expect(characters[1].vida).toBe(1500)
		expect(mockTrue).toHaveBeenCalled();
		expect(mockTrue).toHaveBeenCalledTimes(2);
		
	})
	it("Deve retornar erro por mais personagens que o possível",()=>{
		const characters:Character[]=[{
			nome:"Sub-Zero",
			vida:1000,
			defesa:700,
			forca:800
			},
			{
				nome:"Ryu",
				vida: 1300,
				defesa: 200,
				forca: 600,
			},
			{
				nome:"Kung Lao",
				vida:1500,
				defesa:500,
				forca:800
				}
		]
			try {
				recoverCharacters(characters,mockTrue)
			} catch (error:any) {
				
				
				expect(error.message).toBe("Invalid array")
	
			}	
	})

	it("Deve retornar erro por menos personagens",()=>{
		const characters:Character[]=[{
			nome:"Kitana",
			vida:1500,
			defesa:700,
			forca:800
			}]
			try {
				recoverCharacters(characters,mockTrue)
			} catch (error:any) {
				expect(error.message).toBe("Invalid array")
			
			}
	})
	it("Deve retornar erro por personagem inválido",()=>{
		const characters:Character[]=[{
			nome:"Kung Lao",
			vida:1500,
			defesa:-5,
			forca:800
			},
			{
				nome:"Ryu",
				vida: 1300,
				defesa: 200,
				forca: 600,
			}]
			try {
				recoverCharacters(characters,mockFalse)
			} catch (error:any) {
				expect(error.message).toBe("Invalid Character")
		expect(mockFalse).toHaveBeenCalled();
		expect(mockFalse).toHaveBeenCalledTimes(1);
			}
	})
 })