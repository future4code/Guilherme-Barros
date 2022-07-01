import { User } from "../src/model/user"
import { performPurchase } from "../src/purchase"

test("teste com um usuário com o saldo maior do que o valor de compra",()=>{
	const user:User={
		name:"Guilherme",
		balance:100
	}
	const result=performPurchase(user,40)
	expect(result).toEqual({
		name:"Guilherme",
		balance:60
	})
})
test(" teste com um usuário com o saldo igual ao valor de compra",()=>{
	const user:User={
		name:"Guilherme",
		balance:100
	}
	const result=performPurchase(user,100)
	expect(result).toEqual({
		name:"Guilherme",
		balance:0
	})
})
test("teste com um usuário com o saldo menor do que o valor de compra",()=>{
	const user:User={
		name:"Guilherme",
		balance:100
	}
	const result=performPurchase(user,200)
	expect(result).not.toBeDefined()
})