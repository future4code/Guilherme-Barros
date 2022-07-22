/**
 * 1-const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} 
a) O código pede o usuário um numero, coloca a resposta em uma variável e verifica se
esse número é par, se for, imprimirá no console "Passou no teste.", se não, imprimirá
"Não passou no teste."

b)Numeros Pares

c)Números ímpares

2-let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
a) Para o usuario verificar o preco de uma determinada fruta contida nos casos
b) O preço da fruta Maçã é R$ 2.25
c)  O preço da fruta Pêra é R$ 5
3-const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a) A primeira linha pede ao usuário um número e armazena em uma variável numero
b) Com o numero 10, a mensagem no console será "Esse número passou no teste"
Se fosse -10, apenas mostra um erro de que a variavel mensagem não foi definida,
pois o console.log() está mostrando uma variável que está no escopo do if.
c)Sim, a variável mensagem está no escopo da estrutura de condição if e o console
está fora, logo a variável não será reconhecida, pois o console.log() está fora do escopo
da estrutura de condição.
*/
//1-
const idade = Number(prompt("Digite a idade"))
idade >= 18 ? console.log("Você pode dirigir") : console.log("Você não pode dirigir.")
//2-
const turno = prompt("Digite a inicial do turno que estuda: \n [M] - Matutino \n [V] - Vespertino \n [N] - Noturno")
turno == 'M' ? console.log("Bom Dia!") : turno == 'V' ? console.log("Boa Tarde!") : turno == 'N' ? console.log("Boa noite!") : console.log("Valor inválido!")
//3-
switch (turno) {
	case 'M':
		console.log("Bom Dia!")
		break;
	case 'V':
		console.log("Boa Tarde!")
		break;
	case 'N':
		console.log("Boa Noite!")
		break;
	default:
		console.log("Valor inválido!")
		break;
}
//4-
const filmeGenero = prompt("Qual o gênero que vai ver?")
const preco = Number(prompt("Qual o preço do filme?"))
filmeGenero == 'fantasia' && preco < 15.00 ? console.log("Bom filme!") : console.log("Escolha outro filme :(")