import { Casino, LOCATION, NATIONALITY, User } from "../src/model/casino"
import { verifyAge } from "../src/verifyAge"

test("teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil",()=>{
	const users:User[]=[{
		name:"Guilherme",
		age:20,
		nacionality:NATIONALITY.BRAZILIAN
	}]
	const casino:Casino={
		name:"Casino da Favela",
		location:LOCATION.BRAZIL
	}
	const result = verifyAge(casino,users)
	expect(result.brazilians.allowed).toEqual(["Guilherme"])
})
test("teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil",()=>{
	const users:User[]=[{
		name:"Johnny",
		age:19,
		nacionality:NATIONALITY.AMERICAN
	}]
	const casino:Casino={
		name:"Casino da Favela",
		location:LOCATION.BRAZIL
	}
	const result = verifyAge(casino,users)
	expect(result.brazilians.allowed).toEqual(["Johnny"])
})
test("teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.",()=>{
	const users:User[]=[{
		name:"Johnny",
		age:19,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Guilherme",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	},
	{
		name:"Jake",
		age:19,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Lucas",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	}]

	const casino:Casino={
		name:"Casino Las Vegas",
		location:LOCATION.EUA
	}
	const result = verifyAge(casino,users)
	expect(result.americans.unallowed).toEqual(["Johnny",'Jake'])
	expect(result.brazilians.unallowed).toEqual(["Guilherme","Lucas"])
})
test("teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.",()=>{
	const users:User[]=[{
		name:"Johnny",
		age:21,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Guilherme",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	},
	{
		name:"Jake",
		age:21,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Lucas",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	}]

	const casino:Casino={
		name:"Casino Las Vegas",
		location:LOCATION.EUA
	}
	const result = verifyAge(casino,users)
	expect(result.americans.allowed).toEqual(["Johnny",'Jake'])
	expect(result.brazilians.unallowed).toEqual(["Guilherme","Lucas"])
})
test("Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o tamanho do array allowed da propriedade brasilians tenha tamanho menor do que 2 e maior do que 0.",()=>{
	const users:User[]=[{
		name:"Guilherme",
		age:20,
		nacionality:NATIONALITY.BRAZILIAN
	}]
	const casino:Casino={
		name:"Casino da Favela",
		location:LOCATION.BRAZIL
	}
	const result = verifyAge(casino,users)
	expect(result.brazilians.allowed.length).toBeGreaterThan(0)
	expect(result.brazilians.allowed.length).toBeLessThan(2)
})
test("Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0.",()=>{
	const users:User[]=[{
		name:"Jake",
		age:20,
		nacionality:NATIONALITY.AMERICAN
	}]
	const casino:Casino={
		name:"Casino da Favela",
		location:LOCATION.BRAZIL
	}
	const result = verifyAge(casino,users)
	expect(result.americans.unallowed.length).toBe(0)
	
})
test("Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou",()=>{
	const users:User[]=[{
		name:"Johnny",
		age:19,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Guilherme",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	},
	{
		name:"Jake",
		age:19,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Lucas",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	}]
	const casino:Casino={
		name:"Casino Las Vegas",
		location:LOCATION.EUA
	}
	const result = verifyAge(casino,users)
	expect(result.americans.unallowed).toContain("Lucas")
	expect(result.americans.unallowed).toContain("Guilherme")
	expect(result.americans.unallowed).toContain("Jake")
	expect(result.americans.unallowed).toContain("Johnny")
})
test(" Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que     1. Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 2. ",()=>{
	const users:User[]=[{
		name:"Johnny",
		age:21,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Guilherme",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	},
	{
		name:"Jake",
		age:21,
		nacionality:NATIONALITY.AMERICAN
	},
	{
		name:"Lucas",
		age:19,
		nacionality:NATIONALITY.BRAZILIAN
	}]
	const casino:Casino={
		name:"Casino Las Vegas",
		location:LOCATION.EUA
	}
	const result = verifyAge(casino,users)
	expect(result.americans.unallowed.length).toBeGreaterThan(1)
	expect(result.brazilians.unallowed.length).toBeLessThan(1)
	expect(result.americans.allowed.length).toBe(2)
})