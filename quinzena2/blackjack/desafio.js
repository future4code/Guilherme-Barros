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
let cartasUser=[];
let cartasPC=[];

let iniciar = confirm("Bem-vindo ao jogo Blackjack! \n Deseja iniciar uma nova rodada?")
if(iniciar){
   let cartasIniciais=false;
   while(!cartasIniciais){
    cartasUser.push(comprarCarta())
    cartasUser.push(comprarCarta())
    cartasPC.push(comprarCarta())
    cartasPC.push(comprarCarta())
    if(cartasUser[0].valor==11 && cartasUser[1] == 11 || cartasPC[0].valor==11 && cartasPC[1].valor==11) { 
       cartasUser=[] 
       cartasPC=[] }
       else{ cartasIniciais=true}
   }


let comprar=true
while(comprar){
   let text=""
   let ponto=0;
   let comprarMais
   for(let cartas of cartasUser ){
      text=cartas.texto+"";
      ponto=cartas.valor; 
   }
   ponto>21 ? comprar=false : comprarMais=confirm( `Suas cartas são ${text}. A carta revelada do computador é ${cartasPC[0].texto}.` +
   "\n"+ 
   "Deseja comprar mais uma carta?")
   comprarMais ? cartasUser.push(comprarCarta()) : comprar = false
}
let pontosUser=0;
let textUser="";
let pontosPC=0;
let textPC='';
for (const cartas of cartasUser) {
   pontosUser+=cartas.valor
   textUser+=cartas.texto+''
}
   for (const cartas of cartasPC) {
      pontosPC+=cartas.valor
      textPC+=cartas.texto + ''
   }


if (pontosUser<=21) {
   while (pontosPC<pontosUser && pontosPC <=21) {
      cartasPC.push(comprarCarta())
      for (const cartas of cartasPC) {
         pontosPC+=cartas.valor
         textPC+=cartas.texto + ''
      }
   }
}
let res=''
pontosUser > pontosPC && pontosUser <= 21 ? res="O jogador é o vencedor!" : pontosPC > pontosUser && pontosPC <= 21 ? 
res = "O computador é o vencedor!" : pontosPC > 21 && pontosUser <= 21 ? 
res="O jogador é o vencedor!" : pontosUser > 21 && pontosPC <= 21 ? 
res = "O computador é o vencedor!" : res="Empatou!"
alert( `Usuario - Cartas: ${textUser} - Pontuação: ${pontosUser}` + 
"\n" + 
`Computador - Cartas: ${textPC} - Pontuação: ${pontosPC}` + 
"\n" + 
res)
}else{alert("Fim de jogo")}