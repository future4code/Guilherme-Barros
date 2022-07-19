// EXERCÍCIO 01
function inverteArray(array) {
  const ArrayInvertido = array.map((item, indice, array) => array[array.length - indice - 1]);
  return ArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numsPares = array.filter(item => item % 2 == 0).map(item => item * item)
  return numsPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numsPares = array.filter(item => item % 2 == 0)
  return numsPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const maiorNumero = Math.max(...array)
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const qtdArray = array.length
  return qtdArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const respostas = [booleano1 && booleano2 && !booleano4,
  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const pares = []
  let par = 0
  let i = 0
  while (i < n) {
    i++
    pares.push(par)
    par += 2
  }
  return pares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  let classificacao;
  a == b && b == c ? classificacao = 'Equilátero' : a == b || a == c || c == b ? classificacao = 'Isósceles' : classificacao = 'Escaleno'
  return classificacao

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  let maiorNumero
  let maiorDivisivelPorMenor
  num1>num2?maiorNumero=num1:maiorNumero=num2
  num1%num2==0 || num2%num1==0?maiorDivisivelPorMenor=true:maiorDivisivelPorMenor=false
  const diferenca=Math.abs(num2-num1)
  const object={
    'maiorNumero':maiorNumero,
    'maiorDivisivelPorMenor':maiorDivisivelPorMenor,
    'diferenca':diferenca
  }
  return object
  

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const arrayOrdenado=[]
  
  for (item of array) {
    let contador=0
    for (itemComparado of array) {
      if (item>itemComparado) {
        contador++
      }
    }
    arrayOrdenado[contador]=item
  }
  
  
  return arrayOrdenado
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = new Object();
  filme.nome = 'O Diabo Veste Prada'
  filme.ano = 2006
  filme.diretor = 'David Frankel'
  filme.atores = ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme = new Object();
  filme.nome = 'O Diabo Veste Prada'
  filme.ano = 2006
  filme.diretor = 'David Frankel'
  filme.atores = ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const obj = new Object()
  obj.largura = lado1;
  obj.altura = lado2
  obj.perimetro = 2 * (lado1 + lado2)
  obj.area = lado1 * lado2

  return obj
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const adultos = arrayDePessoas.filter(item => item.idade >= 18)
  return adultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const criancas = arrayDePessoas.filter(item => item.idade < 18)
  return criancas
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const dobro = array.map(item => item * 2)
  return dobro
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const dobroString = array.map(item => item * 2).map(item => item.toString())
  return dobroString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const paridade = array.map(item => {
    if (item % 2 == 0) {
      return `${item} é par`
    }
    else {
      return `${item} é ímpar`
    }
  })
        return paridade
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const autorizadas = pessoas.filter(item => item.altura >= 1.5).filter(item => item.idade > 14 && item.idade < 60)
  return autorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizadas = pessoas.filter(item => item.idade <= 14 || item.idade > 60 || item.altura < 1.5)
  return naoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let ultimoPaciente = {
    nome: ""
  }
  const novoArray = []

  while (consultasNome.length > 0){
    for (paciente of consultasNome) {
      if (paciente.nome > ultimoPaciente.nome){
        ultimoPaciente = paciente
      } 
    }
    novoArray[consultasNome.length - 1] = ultimoPaciente
    consultasNome.splice(consultasNome.indexOf(ultimoPaciente), 1)
    ultimoPaciente = {nome: ""}
  }
  return novoArray
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function parseBRDateFormat(dateString) {
    return new Date(dateString.split("/").reverse().join("-"));
}
   let ordenarPorDataDaConsulta=consultas=>{
     return [...consultas].sort((consultaA, consultaB) => {
        const toDate = ({dataDaConsulta}) => parseBRDateFormat(dataDaConsulta);
        const [dateA, dateB] = [consultaA, consultaB].map(toDate);
        return dateA.getTime() - dateB.getTime()
    });
  }
return ordenarPorDataDaConsulta(consultasData)
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  const sum = (x, y) => x + y
const atualizarSaldo = contas => 
   contas.map(conta => ({
    ...conta,
    saldoTotal: conta.saldoTotal - conta.compras.reduce(sum, 0)
  }))

return atualizarSaldo(contas)
}
