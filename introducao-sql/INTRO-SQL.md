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

