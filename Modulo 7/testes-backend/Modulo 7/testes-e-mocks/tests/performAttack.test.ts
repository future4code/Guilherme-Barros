import { mockFalse } from "../src/mocks/mockFalse"
import { mockTrue } from "../src/mocks/mockTrue"
import { Character } from "../src/model/characters"
import { performAttackInversionDependency } from "../src/performAttack"

describe("Testa a função performAttack",()=>{
	
	
	test("teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida",()=>{
		
		
		const attacker:Character={
			nome:"Ryu",
			vida: 1500,
			defesa: 200,
			forca: 600,
		}
		const defender:Character={
			nome:"Ken",
			vida: 1500,
			defesa: 400,
			forca: 800,
		}
		performAttackInversionDependency(attacker,defender,mockTrue as any)
		expect(defender.vida).toEqual(1300)
		
	})
	test("teste com um dos personagens com vida inválida.",()=>{
		
		const attacker:Character={
			nome:"Ryu",
			vida: -1500,
			defesa: 200,
			forca: 600,
		}
		const defender:Character={
			nome:"Ken",
			vida: 1500,
			defesa: 400,
			forca: 800,
		}
		try {
			performAttackInversionDependency(attacker,defender,mockFalse as any)
		} catch (error:any) {
			expect(error.message).toBe("Invalid Character")
			
		}
	})
	test("teste com um dos personagens com força negativa.",()=>{
	
		const attacker:Character={
			nome:"Ryu",
			vida: 1500,
			defesa: 200,
			forca: -600,
		}
		const defender:Character={
			nome:"Ken",
			vida: 1500,
			defesa: 400,
			forca: 800,
		}
		try {
			performAttackInversionDependency(attacker,defender,mockFalse as any)
		} catch (error:any) {
			expect(error.message).toBe("Invalid Character")
			
		}
	})
	test("teste com um dos personagens sem nome.",()=>{
			const attacker:Character={
			nome:"Ryu",
			vida: 1500,
			defesa: 200,
			forca: -600,
		}
		const defender:Character={
			nome:"",
			vida: 1500,
			defesa: 400,
			forca: 800,
		}
		try {
			performAttackInversionDependency(attacker,defender,mockFalse as any)
		} catch (error:any) {
			expect(error.message).toBe("Invalid Character")
			
		
		}
	})
	test("teste com dois personagens em que o defensor perca toda sua vida",()=>{
		
		
		const attacker:Character={
			nome:"Ryu",
			vida: 1500,
			defesa: 200,
			forca:1500
		}
		const defender:Character={
			nome:"Ken",
			vida: 1500,
			defesa: 0,
			forca: 800,
		}
		performAttackInversionDependency(attacker,defender,mockTrue as any)
		expect(defender.vida).toEqual(0)
		
	})
	
})
