# Sistema de Sensoreamento

Sistema composto de backend + API construídos para o minicurso "API's RESTful com NodeJS", para a Semana do BSI 2017 no IF Sudeste MG. 

## Apresentação
- Foi apresentado aos alunos uma situação hipotética na qual teríamos de construir uma API que integrasse um sistema legado a tecnologias distintas de frontend, serviços em núvem e dispositivos de IoT, por exemplo, o que é ilustrado na figura a seguir: 

![Alt Text](https://github.com/lfernando-silva/minicurso-semana-bsi/blob/master/Componentes%20(1).png)

- A construção de uma API NodeJS utilizando o protocolo HTTP e com a representação dos recursos na forma REST foi o objetivo do nosso minicurso.


## [Slide do Minicurso](https://docs.google.com/presentation/d/1wsewYuiSrnZ0Hn0-wUs_QTn4Z3mJduIrKdU4HshsuT4/edit?usp=sharing)



### Pré-requisitos
- [NodeJS](www.nodejs.org) - 4x ou superior
- [PostgreSQL](https://www.postgresql.org) - 9.4 ou superior
	- * O [WAPP Stack do Bitnami](https://bitnami.com/stack/wapp) é uma excelente e fácil opção para Apache + PostgreSQL caso já não tenha o Apache instalado.

### Global modules
- [Knex](www.knexjs.org) - 0.12.x
- [Express Generator](http://expressjs.com/pt-br/starter/generator.html) - 0.12.x
- [PM2](http://pm2.keymetrics.io) - 2.4x (OPCIONAL)

## Composição
- o ecossistema da nossa API é composta por **DOIS** sistemas: um que gera as leituras de sensor e a outra que, que é a API RESTful.

    - Sistema de Sensoreamento - Sistema fictício que lê sensores/leituras de dispositivos e armazena num banco de dados.
    - API de Sensoreamento - API que fomos incumbidos de criar para que os dados possam ser acessados de qualquer plataforma (Mobile, Web, Desktop, outros sistemas, dispostivos IoT, etc).
    
## Instruções
- Gerais:
- Instale os módulos globais:
```js
$ npm install -g knex
$ npm install -g express-generator
$ npm install -g pm2
```

- Na pasta do Sistema de Sensoreamento:
    - Execute o WAPP (PostgreSQL)
    - Através de seu editor de banco de dados (que não pode ser o Workbench), crie um banco de dados chamado "sensoreamento"
    - Procure pelo arquivo "knexfile.js" e altere:
```js
//...
      development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'sensoreamento',
      user: 'NOME DE USUÁRIO DO POSTGRESQL',
      password: 'SENHA DO USUÁRIO DO POSTGRESQL',
    },
   },
//..
```
- Insira as mesmas configurações no arquivo /bd/KnexConfig.js
   - Instale todas as dependências do NodeJS (necessária conexão com a Internet):
    
```sh    
    $ npm install
```
   - Execute a migration (criação das tabelas e alimentação mínima do sistema):
    
```sh    
    $ knex migrate:latest
```
   - Execute a aplicação no terminal:
```sh    
    $ node app.js
```
   - OU execute em background:
   
```sh    
    $ pm2 start sensoreamento.config.js
```
    
- Na pasta api-restful-nodejs (com o sistema de sensoreamento rodando ou não):
   -- Instale todas as dependências do NodeJS (necessária conexão com a Internet):
    
```sh    
    $ npm install
```

- Execute o projeto:
```sh    
    $ npm start
```

## Estrutura do Projeto API RESTful
- app.js -> Script de inicialização
- package.json -> Descritor da aplicação, mapeia todas as dependências locais.
- /routes -> Arquivos de rotas do nosso sistema, onde definimos as URLs e o que elas acessam
- /model -> Arquivos que contém as regras de negócio do nosso sistema
- /bd -> Camada de persistência ou DAO

Lembre-se que não temos VIEW nesse caso, por se tratar de uma API, em que a VIEW é parte externa.

## Dúvidas, sugestões, contribuições
- Abra um pull request, estou a disposição!

## License
MIT
