/**
 * 1- const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) Virginia Cavendish
console.log(filme.transmissoesHoje[2]) {canal: "Globo", horario: "14h"}

2-const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
 {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}
{
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

}
b) Ele traz dados de um objeto já criado 

3-function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) 
console.log(minhaFuncao(pessoa, "altura")) 

a) false e undefined
b) O primeiro console.log foi pego a propriedade backender e 
no segundo foi undefined pois a propriedade altura não foi definida no objeto 
*/
//1-a)
const pessoa = {
	nome: "Amanda", 
	apelidos: ["Amandinha", "Mandinha", "Mandi"]
     }
const apresentacao=(objeto)=>console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${ objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
apresentacao(pessoa)
//b)
const outraPessoa={
	...pessoa,
	apelidos: ["Mandizinha", "MandiMandi", "Amandão"]
}
apresentacao(outraPessoa)
//2-a)
const people={
	nome:'Guilherme',
	idade:19,
	profissao:'Programador'
}
const secondPeople={
	nome:'Cristiano Ronaldo',
	idade:36,
	profissao:'Jogador de Futebol'
}
//b)
const imprimir=function(objeto){
	const array=[objeto.nome,objeto.nome.length,objeto.idade,objeto.profissao, objeto.profissao.length] 
	return array
} 
console.log(imprimir(people))
//3-a)
const carrinho=[]
//b)
const morango={
	nome:"Morango",
	disponibilidade:true
}
const banana={
	nome:"Banana",
	disponibilidade:true
}
const maca={
	nome:"Maçã",
	disponibilidade:true
}
//c
const compra = function(objeto1,objeto2,objeto3){
	carrinho.push(objeto1)
	carrinho.push(objeto2)
	carrinho.push(objeto3)

	console.log(carrinho)
}
//d
compra(morango,banana,maca)