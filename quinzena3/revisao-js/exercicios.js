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
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maiorNumero
  let maiorDivisivelPorMenor
  let diferenca
  const obj=new Object()
  if (num1 > num2 && num1 % num2 == 0) {
    maiorNumero = num1
    maiorDivisivelPorMenor = true
    diferenca = num1 - num2
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
     /* "maiorNumero": maiorNumero,
      "maiorDivisivelporMenor": maiorDivisivelporMenor,
      "diferenca": diferenca*/
  } else if (num2 > num1 && num2 % num1 == 0) {
    maiorNumero = num2
    maiorDivisivelPorMenor = true
    diferenca = num2 - num1
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  } else if (num1 > num2 && num1 % num2 != 0) {
    maiorNumero = num1
    maiorDivisivelPorMenor = false
    diferenca = num1 - num2
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  } else if (num2 > num1 && num2 % num1 != 0) {
    maiorNumero = num2
    maiorDivisivelPorMenor = false
    diferenca = num2 - num1
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  }else{
    maiorNumero=num1
    maiorDivisivelPorMenor=true
    diferenca=num1-num2
    obj.maiorNumero=maiorNumero
    obj.maiorDivisivelPorMenor=maiorDivisivelPorMenor
    obj.diferenca=diferenca
  }
  return obj

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
