/**
 *1- let array
console.log('a. ', array) Imprimirá undefined

array = null
console.log('b. ', array) Imprimirá null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) Imprimirá 11

let i = 0
console.log('d. ', array[i]) Imprimirá 3

array[i+1] = 19
console.log('e. ', array) Imprimirá [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) Imprimirá 9
2-const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) Imprimirá uma frase em caracteres maiúsculos, 
substituirá os caracteres A por I contidos na frase e imprimirá o tamanho da frase baseado nos caracteres digitados do usuário.
Para a frase "Subi num ônibus em Marrocos", ficará SUBA NUM ÔNIBUS EM MIRROCOS,27 
 */
//1-
const emailDoUsuario=prompt("Digite seu email")
const nomeDoUsuario=prompt("Digite seu nome")
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
//2-
const comidas=["Lasagna","Sorvete","Salada de Frutas", "Sushi", "Batata Frita"]
console.log(comidas);
console.log(`Essas são as minhas comidas preferidas: \n${comidas[0]+"\n"+comidas[1]+"\n"+comidas[2]+"\n"+comidas[3]+"\n"+comidas[4]}`)
const comidaPreferida=prompt("Digite sua comida preferida")
comidas[1]=comidaPreferida
console.log(comidas)
//3-
const listaDeTarefas=[]
const tarefaUm=prompt("Digite a primeira tarefa")
const tarefaDois= prompt("Digite a segunda tarefa")
const tarefaTres=prompt("Digite a terceira tarefa")
listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)
console.log(listaDeTarefas)
const indice=Number(prompt("Digite o índice da tarefa que realizou"))
listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)
