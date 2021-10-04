/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*console.log("Boas vindas ao jogo de Blackjack!")
const inicio=confirm("Quer iniciar uma nova rodada?")
if (inicio) {
   let cartaUmUsuario=comprarCarta();
   let cartaDoisUsuario=comprarCarta();
   let cartaUmPC=comprarCarta()
   let cartaDoisPC=comprarCarta();

   let pontosUsuario=cartaUmUsuario.valor+cartaDoisUsuario.valor;
   let pontosPC=cartaUmPC.valor+cartaDoisPC.valor

   console.log(`Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} - ${pontosUsuario}`)
   console.log(`Computador - cartas: ${cartaUmPC.texto} ${cartaDoisPC.texto} - ${pontosPC}`)
   pontosUsuario > pontosPC ? console.log("O usuário ganhou!") : pontosPC > pontosUsuario ? console.log("O computador ganhou!") : console.log("Empate!")
}*/