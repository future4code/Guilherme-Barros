function obterEstatisticas(numeros:number[]):Object {

	

	const numerosOrdenados:number[] = numeros.sort(
	    (a, b) => a - b
	)
    
	let soma:number = 0
	let num:number
	for (num of numeros) {
	    soma += num
	}
    
	const estatisticas:Object = {
	    maior: numerosOrdenados[numeros.length - 1],
	    menor: numerosOrdenados[0],
	    media: soma / numeros.length
	}
    
	return estatisticas
    }
    type amostraDeDados = {

	numeros:number[],

	obterEstatisticas: {numeros:number[]}
}