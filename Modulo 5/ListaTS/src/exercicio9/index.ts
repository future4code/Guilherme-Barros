
const anagramas = (palavra: string): number => {

  const numLetras: number = palavra.length

  let numAnagramas: number = 1

  for (let i = numLetras; i > 0; i--) {
    numAnagramas *= i
  }

  return numAnagramas
}

console.log(anagramas("tenet"))
