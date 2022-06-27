export type Account={
	name:string,
	cpf:string,
	dataNascimento:string,
	saldo:number,
	extract:Extract[]
}

export enum Transaction{
	DEBITO="Débito",
	DEPOSITO="Deposito em dinheiro"
}
export type Extract={
	valor:number,
	data:String,
	descricao:Transaction.DEBITO | Transaction.DEPOSITO
} 
export const Users:Account[]=[
	{name:'Jose',cpf:'17423875864',dataNascimento:"25/04/1996",
	saldo:999999,extract:[{valor:999999,data:"04/07/2022",descricao:Transaction.DEBITO}]},

]