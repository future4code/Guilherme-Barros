/**
 * let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
No primeiro console será: 10
No segundo console será impresso: 10,5

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)
Será impresso: 10,10,10
 */
//1-
let nome
let idade
console.log(typeof nome)
console.log( typeof idade)
//por que esse tipo foi impresso? Foi impresso esse tipo, pois a variável foi declarada, mas sem valor nem tipo definido
nome=prompt("Qual seu nome? ")
idade=prompt("Qual sua idade? ")
console.log(typeof nome)
console.log( typeof idade)
//Agora essa variável recebeu um valor e possui um tipo definido, no caso, String
console.log("Olá", nome,",você tem", idade,"anos")
//2-
let questOne="Você é humano?"
let questTwo="Você gosta de filmes de comédia?"
let questThree="Você gosta de filmes de ação?"
let answerOne=prompt(questOne)
let answerTwo=prompt(questTwo)
let answerThree=prompt(questThree)
console.log(questOne, "-", answerOne)
console.log(questTwo, "-", answerTwo)
console.log(questThree, "-", answerThree)
//3-
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c
let d
c=a
d=b
b=c
a=d
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
