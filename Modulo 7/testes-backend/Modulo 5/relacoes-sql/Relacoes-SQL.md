## Exercício 1

#### a) 

Chave estrangeira é um dado de identificação que faz a ligação de uma tabela com outra através da chave primária da tabela relacionada.

#### b)

````mysql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating VALUES(
"001","Bom filme",10,"001"
)
````

#### c)

Não se pode adicionar ou atualizar a tabela que faça referência a uma tabela com id inexistente ou inválido

#### d)

````mysql
Alter table Filmes 
drop column avaliacao;
````

#### e)

Não é possível deletar ou atualizar um dado que faça fronteira com a tabela Rating

## Exercício 2

#### a)

A tabela possui dois atributos, um que faça referência ao id do filme e outro que faça referência ao id do ator

#### b)

````mysql
INSERT INTO MovieCast VALUES(
	"003","001",
    "003","002",
    "002","003",
    "004","005",
    "006","006",
    "007","007"
);
````

#### c)

Não se pode adicionar ou atualizar a tabela que faça referência a uma tabela com id inexistente ou inválido

#### d)

Não é possível deletar ou atualizar um dado que faça fronteira com a tabela MovieCast

## Exercício 3

#### a)

O operador ON é o que fará a referência de uma tabela em outra "ONDE" a relação existir.

#### b)

````mysql
select nome, Filmes.id, rate from Filmes
inner join Rating on Filmes.id = Rating.movie_id;
````

