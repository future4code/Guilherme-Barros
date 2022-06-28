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