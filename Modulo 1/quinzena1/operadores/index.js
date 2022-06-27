/**
1-const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) -> false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) -> false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) -> true

console.log("d. ", typeof resultado) -> boolean

2-let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) -> Será impresso a concatenação do valor alocado primeiroNumero e em segundoNumero, pois em prompt recebe apenas String

3-Sugiro que seja feito o cast Number() em ambos os prompts para que o prompt aceite somente valores numéricos e possa fazer a soma.
 */
//1-
let age = Number(prompt("Qual sua idade?"))
let ageFriend=Number(prompt("Qual a idade do seu(sua) melhor amigo(a)?"))
let isLarger=Boolean(prompt("Sua idade é maior do que a do seu melhor amigo? Responda true ou false"))
let diffAges = age - ageFriend;
console.log("Diferença entre as idade dos amigos",diffAges)
console.log("Sua idade é a maior?",isLarger)
//2-
let pairNumber=Number(prompt("Insira um número par: "))
let restByTwo=pairNumber%2;
console.log(restByTwo)//Com números pares, o resto é sempre 0, com número ímpar sempre dá 1
//3-
let yearsAge = Number(prompt("Qual sua idade em anos?"))
let months = yearsAge*12;
let days = months*365;
let hours = days*24;
console.log("Idade em anos: ",yearsAge,", Idade em meses:",months,", Idade em dias: ",days,", Idade em horas: ",hours)
//4-
let firstNumber=Number(prompt("Digite o primeiro número: "))
let secondNumber=Number(prompt("Digite o segundo número: "))
let isLargerThan=firstNumber>secondNumber;
let isEqual=firstNumber==secondNumber;
let isFirstDivisible=(firstNumber%secondNumber)==0
let isSecDivisible=(secondNumber%firstNumber)==0
console.log("O primeiro é maior que o segundo?",isLargerThan)
console.log("São iguais?",isEqual)
console.log("O primeiro é divisível pelo segundo?",isFirstDivisible)
console.log("O segundo é divisível pelo primeiro?",isSecDivisible)


