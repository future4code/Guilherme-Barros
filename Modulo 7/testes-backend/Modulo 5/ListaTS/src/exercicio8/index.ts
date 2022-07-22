const convertAno = (dtAtual: number, dtAnterior: number): number => {
	return (dtAtual - dtAnterior) * (3.17 * 10 ** -11)
      }

const renovarDoc=(
	dataNasc:string,
	dataEmiss:string
):boolean=>{
	const dataAtual=new Date().getTime()
	const dataEmissao:number=Date.parse(
		dataEmiss.split("/").reverse().join("/")
	)
	const dataNascimento:number=Date.parse(
		dataNasc.split("/").reverse().join("/")
	)
	const valido=convertAno(dataAtual, dataEmissao)
	const idade = convertAno(dataAtual, dataEmissao)
	if (idade < 21 && valido > 4) return true
	else if (idade > 20 && idade < 51 && valido > 9) return true
	else if (idade > 50 && valido > 14) return true
	else return false
      }


