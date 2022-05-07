type Cliente={
	cliente:string,
	saldoTotal:number,
	debitos:number[]
}
const contas:Cliente[]=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
const clientesNegativados:(contas:Cliente[])=>Cliente[]=(contas)=>{
		const saldosNegativados = contas.map((conta) => {
			const totalDebits = conta.debitos.reduce((prev, next) => {
			  return (prev += next)
			}, 0)
			conta.saldoTotal -= totalDebits
			return conta
		      }).filter((conta) => {
			  return conta.saldoTotal < 0
		      })
		      return saldosNegativados
}
console.log(clientesNegativados(contas));
