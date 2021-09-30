/*1-
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})
a)Será impresso cada item do array de objetos usuarios, cada índice do array e o array completo 

2-
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
a)Será impresso, dessa vez, somente o valor da propriedade nome de cada objeto do array usuarios

3-const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
a)Será impresso apelidos diferentes de Chijo*/
//1-
const pets = [
	{ nome: "Lupin", raca: "Salsicha" },
	{ nome: "Polly", raca: "Lhasa Apso" },
	{ nome: "Madame", raca: "Poodle" },
	{ nome: "Quentinho", raca: "Salsicha" },
	{ nome: "Fluffy", raca: "Poodle" },
	{ nome: "Caramelo", raca: "Vira-lata" },
]
//a)
const mapeiaNomes = pets.map(nomes => nomes.nome)
console.log(mapeiaNomes)
//b)
const filterSalsichas = pets.filter(salsichas => salsichas.raca == "Salsicha")
console.log(filterSalsichas)
//c)
const filtraPoodles = pets.filter(poodles => poodles.raca == "Poodle")
filtraPoodles.map(nomes => nomes.nome)
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", filtraPoodles, "!")
//2-
const produtos = [
	{ nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
	{ nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
	{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
	{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
	{ nome: "Leite", categoria: "Bebidas", preco: 2.99 },
	{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
	{ nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
	{ nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
	{ nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
	{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
let retornaNomes = produtos.map(nomes => nomes.nome)
console.log(retornaNomes)
//b)
retornaNomes = produtos.map((preco) => {
	const nomes = preco.nome
	const precoDesc = (preco.preco * 0.95).toFixed(2)
	return ({ nome: nomes, preco: precoDesc })
})
console.log(retornaNomes)
//c)
const retornaBebidas = produtos.filter(bebidas => bebidas.categoria)
//d)
const retornaYpes = produtos.filter((ypes) => {
	const nomes = ypes.nome
	const cat = ypes.categoria
	const precos = ypes.preco
	if (nomes.includes("Ypê")) {
		return ({ nome: nomes, categoria: cat, preco: precos })
	}
})
console.log(retornaYpes)
//e)
let mapeiaNomePreco = produtos.map((dados) => {
	const nomes = dados.nome
	const precos = dados.preco
	return ({ nome: nomes, preco: precos })
}).filter((ypes, index) => {
	const nomes = ypes.nome
	const precos = ypes.preco
	if (ypes.nome.includes("Ypê")) {
		ypes[index] = `COMPRE ${nomes} POR ${precos}`
		return ypes[index]
	}

})
console.log(mapeiaNomePreco)