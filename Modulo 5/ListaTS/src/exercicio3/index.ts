import { Type } from "typescript";
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const catalogo=(nome:string,ano:number,genero:GENERO,pontuacao?:number):object=>{
	
	type Filme={
		nome:string,
		ano:number,
		genero:GENERO,
		pontuacao:number | undefined,	
	}
	const novoFilme:Filme={
		nome,
		ano,
		genero,
		pontuacao
	}

	return novoFilme
}
console.log(catalogo('Duna',2021,GENERO.ACAO));
