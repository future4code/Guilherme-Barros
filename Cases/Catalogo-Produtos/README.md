# <h1 id="topo">Catálogo de Produtos - Amaro</h1>

## <h2 id=sobre>Sobre</h2>

API sucinta criada por [Guilherme de Oliveira Barros](https://github.com/FIXER3600) do case 2: desafio Back-end Amaro para o curso Web Fullstack Labenu.


##  🔠Conteúdos

<!--ts-->
   * [Sobre](#sobre)
   * [Objetivo do Projeto](#objetivo-do-projeto)
   * [Tecnologias](#tecnologias)
   * [Funcionalidades](#funcionalidades)
   * [Concepção do Projeto](#concepcao-do-projeto)
   * [Rodando o Projeto](#rodando-o-projeto)
   * [Documentação](#documentacao)
   * [Colaboradores](#colaboradores)
<!--te-->



##  <h2 id=objetivo-do-projeto>🎯Objetivo do Projeto</h2>

Este é um projeto de Back-end, desenvolvido no bootcamp da Labenu, cujo o principal objetivo é estudar e compreender : Serviços (gerador de id, autenticação e criptografia de senha), arquitetura utilizando a programação orientada a objetos e um código que possa ser testado utilizando o Jest como ferramenta.

<h4 align="right"><a href="#topo">Topo</a></h4>


## <h2 id=tecnologias>🛠 Tecnologias</h2>

Para este projeto eu usei as seguintes tecnologias:

- NodeJs
- Typescript
- Express
- Mysql
- Knex
- UUID
- Bcryptjs
- Jsonwebtoken
- Postman
- Paradigma de orientação a objetos
- Arquitetura em camadas
- Jest
- Git

<h4 align="right"><a href="#topo">Topo</a></h4>


## <h2 id=funcionalidades>✔ Funcionalidades</h2>

- Cadastro de Usuário

- Login

- Inserção de Produtos

- Busca um produto pelo Id

- Busca um produto pelo nome

- Busca produtos por uma tag em comum

  

<h4 align="right"><a href="#topo">Topo</a></h4>

## <h2 id=concepcao-do-projeto>💡Concepção do Projeto</h2>

Para esse projeto são modelados cinco entidades : **Usuário, Produtos, e Tag**  
Cada um com as seguintes características :

→ Usuários -  id, name (nome), email, password (senha) e a role (responsabilidade) do usuário no sistema;

→ Produtos - id e name (nome do produto);

→ Tag - id, name (nome da tag) e productId (chave estrangeira para identificar o id que a tag faz parte).

**Modelagem do Banco de Dados** 

![Untitled](C:\Users\Guilherme\Guilherme-Barros\Cases\Catalogo-Produtos\Diagrama.png)

<h4 align="right"><a href="#topo">Topo</a></h4>


## <h2 id=documentacao>🔗Documentação</h2>

- **Documentação no Postman:** [Catálogo de Produtos](https://documenter.getpostman.com/view/18676403/VUjMoRLU)

<h4 align="right"><a href="#topo">Topo</a></h4>


## <h2 id=rodando-o-projeto>🛰Rodando o Projeto</h2>

Para rodar o projeto, basta baixar ou clonar o repositório e rodar o comando npm i no terminal na pasta do projeto e todas as depedências serão baixadas para que o projeto possa rodar.

Para Rodar o projeto, siga as seguintes etapas :

<h4>1º | Faça o clone do repo: </h4>

<code>
    git clone https://github.com/future4code/Guilherme-Barros/pull/75
</code>

<br>
<br>

<h4>2º | Instale as dependências: </h4>

<code>
   npm install
</code>

<br>
<br>

<h4>3º | Inicie o servidor: </h4>

<code>
   npm run start
</code>

<h4 align="right"><a href="#topo">Topo</a></h4>


## <h2 id=colaboradores>Desenvolvedor</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/FIXER3600">
        <img src="https://avatars.githubusercontent.com/u/47544503?v=4" width="100px;" alt="Foto de Guilherme"/><br>
        <sub>
          <b>Guilherme de Oliveira Barros</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


<h4 align="right"><a href="#topo">Topo</a></h4>