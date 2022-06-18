/**a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
 * Tente atribuir um número a esta variável. O que acontece? */
let minhaString:string="Valor";
//minhaString=5
//R: Ocorre um erro de tipagem, pois um número não pode ser atribuído a uma variável do tipo string
/**b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
 * Como fazer para que essa variável também aceite strings? 
 * Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor? */
//R:
let meuNumero:number|string=8
/**c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string. 
Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.
d) Modifique a propriedade corFavorita para que apenas seja 
 possível escolher entre as cores do arco-íris. Utilize um enum para isso. */
enum ArcoIris{
	VERMELHO="Vermelho",
	AZUL="Azul",
	VERDE="Verde",
	AMARELO="Amarelo",
	LARANJA="Laranja",
	ANIL='Anil',
	VIOLETA='Violeta'
}
type Pessoa={
	nome:String,
	idade:number,
	corFavorita:string
}
const guilherme:Pessoa={
	nome:'Guilherme',
	idade:20,
	corFavorita:ArcoIris.ANIL
}
const marcos:Pessoa={
	nome: 'Marcos',
	idade: 15,
	corFavorita: ArcoIris.AZUL
}
const maria:Pessoa={
	nome: "Maria",
	idade: 20,
	corFavorita: ArcoIris.AMARELO
}

