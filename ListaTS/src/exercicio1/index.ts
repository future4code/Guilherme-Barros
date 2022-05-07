const dadosPessoais=(nome:string,dataNascimento:string):string=>{
	const data=dataNascimento.split("/")
	return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`
}
console.log(dadosPessoais("Guilherme","24/12/2001"));
