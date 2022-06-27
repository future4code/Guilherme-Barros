/**
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
a) Será impresso 10 no primeiro console e 50 no segundo 
b) Apareceria nada, pois o console não está sendo executado*/
/**
 * let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
a) O código pede ao usuário um texto, cria uma função que deixa o texto em minúsculo e verifica se tem a palavra "cenoura" nele e exibe a resposta
b)i.true
ii. true 
iii. true*/
//1-a)
const apresentacao = () => { console.log(`Eu sou Guilherme, tenho 19 anos, moro em São Paulo e sou estudante.`) }
apresentacao()
//b)
const apresentacaoVariavel = (nome, idade, endereco, profissao) => { return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.` }
console.log(apresentacaoVariavel("Guilherme", 19, "São Paulo", "estudante"))
//2-a)
const soma = (num, num2) => { return num + num2 }
console.log(soma(5, 5))
//b)
const greaterThan = (num, num2) => { return num > num2 }
console.log(greaterThan(2, 5))
//c
const par = (num) => { return num % 2 == 0 }
console.log(par(8))
//d
const stringMinuscula = (texto) => { return texto.toUpperCase() + " " + texto.length; }
console.log(stringMinuscula("mr.nobody"))
//3-
const soma2 = (num, num2) => { return num + num2 }
const sub = (num, num2) => { return num - num2 }
const div = (num, num2) => { return "Divisão: " + num / num2 }
const mult = (num, num2) => { return "Multiplicação: " + num * num2 + "\n" }
const valor1 = Number(prompt("Digite o primeiro valor"))
const valor2 = Number(prompt("Digite o segundo valor"))
console.log("Números inseridos: " + valor1 + " e " + valor2 + "\n" + "Soma:", soma2(valor1, valor2), "\n" + "Subtração:", sub(valor1, valor2), "\n" + mult(valor1, valor2) + div(valor1, valor2))
