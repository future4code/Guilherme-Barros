## Exercício 1

#### a)

- Id : Varchar com 255 de limite de caracteres, ou seja, um dado como chave primária sendo uma sequência de caracteres que comporta 255 caracteres;
- name: Varchar com 255 de limite de caracteres e não pode ser nulo, ou seja,  deve ser inserido um dado no momento de realizar os respectivos inserts
- birth_date: Tipo data em formato americano "yyyy-mm-dd" e não pode ser nulo
- gender: sequência de até 6 caracteres e não podendo ser nulo

#### b)

- SHOW DATABASES: Lista os bancos de dados do usuário
- SHOW TABLES: Lista as tabelas em seus respectivos bancos

#### c)

- DESCRIBE Actor: Mostrou-se uma tabela com as especificações da tabela Actor com uma coluna "Field" listando os campos onde estarão os dados da tabela, uma coluna "Type" com o tipo de cada campo, uma coluna "Null" que verifica se o campo pode ou não ser nulos, como a tabela foi criada com todos os atributos "NOT NULL", logo nenhum pode ser nulo. Uma coluuna "key" indicando quais campos são chaves e quais tipos de chaves esses campos possuem, nesse caso apenas o campo id é uma chave e é uma chave primária. Uma coluna "Default" para indicar qual o valor inicial de cada campo. Coluna extra para informações extras está vazia.

## Exercício 2

#### a)

```mysql
INSERT INTO Actor VALUES
("002","Glória Pires",1200000,"1963-08-23","female");
```

#### b)

O erro exibido indica que no insert houve um id duplicado pelo código 002 de uma chave primária

#### c)

O erro exibido indica que no insert  o número de colunas não corresponde com as colunas da tabela.

#### d)

O erro exibido indica que no insert não foi definido um valor para o campo name.

#### e)

O erro exibido indica que no insert o valor inserido no campo "birth_date" do tipo Date não corresponde.

## Execício 3

#### a)

```mysql
select * from Actor where gender = "female"
```

#### b)

```mysql
select salary from Actor where name = "Tony Ramos";
```

#### c)

- Retornou apenas a coluna gender, sem dados, pois não há gênero com o valor "inválid" na tabela.

#### d)

```mysql
select id, name, salary from Actor where salary<500000;
```

#### e)

- O campo "nome" não existe na tabela Actor, o correto seria:

- ```mysql
  SELECT id, name from Actor WHERE id = "002"
  ```

## Exercício 4

#### a) 

- A query seleciona todos os Atores que possuírem um nome que começa com o caracter A ou J e que possuam o salário maior que 300000

#### b)

```mysql
select * from Actor where name NOT LIKE  "A%"  and salary > 350000;
```

#### c)

```mysql
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

#### d)

```mysql
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5

#### a)

```mysql
CREATE TABLE Filmes(
	id varchar(255) primary key,
    nome varchar(255) not null unique,
    sinopse text not null,
    dataLancamento varchar(10) not null,
    avaliacao int
);
```

#### b)

```mysql
insert into Filmes values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"06/01/2006",
7
);
```

#### c)

```mysql
insert into Filmes values(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"27/12/2012",
10
);
```

#### d)

```mysql
insert into Filmes values(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"02/11/2017",
8
);
```

#### e)

```mysql
insert into Filmes values(
"004",
"Tropa de Elite",
"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, 
é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. 
Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. 
Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, 
dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores,
 os dois se candidatam ao curso de formação da Tropa de Elite.",
"05/10/2007",
10
);
```

## Exercício 6

#### a)

```mysql
select id,nome,avaliacao from Filmes where id="004";
```

#### b)

```mysql
select * from Filmes where nome="Tropa de Elite";
```

#### c)

```mysql
select id,nome,sinopse from Filmes where avaliacao>=7;
```

## Exercício 7

#### a)

````mysql
select * from Filmes where nome LIKE "%vida%";
````

#### b)

````mysql
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
````

#### c)

````mysql
select * from Filmes where dataLancamento < curdate();
````

#### d)

```mysql
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%" and avaliacao>7 and dataLancamento < curdate();
```

