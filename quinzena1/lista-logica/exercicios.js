// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = prompt("Digite a altura do retângulo: ")
  let largura = prompt("Digite a largura do retângulo: ")
  let area = largura * altura
  console.log(area)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = prompt("Digite o ano atual: ")
  let anoNasc = prompt("Digite o ano de nascimento: ")
  let idade = anoAtual - anoNasc;
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso=prompt("Digite o peso: ")
  let altura=prompt("Digite a altura em metros: ")
  let IMC=peso/(altura*altura)
  console.log(IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome=prompt("Digite seu nome: ")
  let idade=prompt("Digite sua idade: ")
  let email=prompt("Digite seu email: ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let cores=[]
  let cor1=prompt("Digite sua primeira cor favorita: ")
  let cor2=prompt("Digite sua segunda cor favorita: ")
  let cor3=prompt("Digite sua terceira cor favorita: ")
  cores.push(cor1)
  cores.push(cor2)
  cores.push(cor3)
  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let string=prompt("Digite uma string: ")
  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custo = prompt("Digite o custo do espetáculo: ")
  let ingresso=prompt("Digite o valor dos ingressos: ")
  let vendidos=custo/ingresso;
  console.log(vendidos)
  
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let primeiraString=prompt("Digite a primeira String: ")
  let segundaString=prompt("Digite a segunda String: ")
  let mesmoTamanho=primeiraString.length==segundaString.length;
  console.log(mesmoTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let primeiraString=prompt("Digite a primeira String: ")
  let segundaString=prompt("Digite a segunda String: ")
  let mesmoTamanho=primeiraString.toLowerCase()==segundaString.toLowerCase();
  console.log(mesmoTamanho)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual: "))
  let anoNasc = Number(prompt("Digite o ano de nascimento: "))
  let anoEmissao=Number(prompt("Digite o ano da emissão da carteira de identidade: "))
  let idade=anoAtual-anoNasc;
  let freqRenovar=anoAtual-anoEmissao
  let frequencia5em5=freqRenovar>=5
  let frequencia10em10=freqRenovar>=10
  let frequencia15em15=freqRenovar>=15
  let renovar=(idade<=20&&frequencia5em5==true || idade>=20 && idade<=50 && frequencia10em10==true || idade>50 && frequencia15em15==true)
  console.log(renovar)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano=Number(prompt("Digite o ano que deseja verificar: "))
  let multi400=ano%400==0
  let mult4=ano%4==0 && ano%100!=0
  let bissexto=multi400 || mult4
  let naoBissexto=bissexto!=bissexto
  console.log(bissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade=prompt("Você tem mais de 18 anos?")
  let ensMedio=prompt("Você tem mais de 18 anos?")
  let dispon=prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(idade=="sim" && ensMedio=="sim" && dispon=="sim")
}