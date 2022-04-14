## Exercício 1

#### a) 

Dropa a coluna salary da tabela Actor

#### b)

Muda a coluna gender para "sex" e o tipo para varchar(6)

#### c)

Altera a coluna gender para gender do tipo varchar(255)

#### d)

```mysql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2

#### a)

````mysql
UPDATE Actor
SET name = "Daniel Craig", birth_date="02/03/1968"
WHERE id = "003"
````

#### b)

```mysql
UPDATE Actor
SET name="JULIANA PAES"
where name="Juliana Paes"

UPDATE Actor
SET name="Juliana Paes"
where name="JULIANA PAES"
```

#### c)

```mysql
UPDATE Actor
SET id="006",name="Keanu Reeves",salary=315000000000,birth_date="1964-09-02",gender="male"
WHERE id="005";
```

#### d)

````mysql
UPDATE Actor
SET id="007",name="Hugh Jackman",salary=25000000000,birth_date="1968-10-12",gender="male"
WHERE id="12";
````

O update simplesmente não foi aplicado já que o valor do id não existe na tabela de Atores.

## Exercício 3

#### a)

```mysql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

#### b)

````mysql
DELETE FROM Actor WHERE gender = "male" and salary > 1000000;
````

## Exercício 4

#### a)

````mysql
SELECT MAX(salary) from Actor 
````

#### b)

````mysql
SELECT MIN(salary) from Actor where gender = "female";
````

#### c)

````mysql
select count(*) fROM Actor WHERE gender = "female";		
````

#### d)

````mysql
select sum(salary) from Actor
````

## Exercício 5

#### a)

A query selecionou os gêneros dos atores inseridos na tabela e contou quantos existem de cada gênero

#### b)

````mysql
select id, name from Actor order by name desc
````

#### c)

````mysql
select * from Actor order by salary
````

#### d)

````mysql
select * from Actor order by salary desc limit 3
````

#### e)

````mysql
select avg(salary) ,gender from Actor group by gender;
````

## Exercício 6

#### a)

````mysql
ALTER TABLE Filmes
ADD playing_limit_date VARCHAR(10)
````

#### b)

````mysql
ALTER TABLE Filmes
CHANGE avaliacao avaliacao float
````

#### c)

````mysql
UPDATE Filmes
set playing_limit_date = "06/05/2022"
WHERE id="004";
UPDATE Filmes
set playing_limit_date = "01/04/2022"
where id="001";
````

#### d)

````mysql
DELETE FROM Filmes where id="001";
UPDATE Filmes
SET sinopse="Teste"
where id="001";
````

Não houve erro, porém nada foi atualizado já que o id indicado não existe na tabela