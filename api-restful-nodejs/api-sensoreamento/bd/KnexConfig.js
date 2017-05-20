
//Configurações do banco de dados
const config = {
    client: 'pg',
    connection: {
        host: '10.2.3.101',
        user: 'postgres',
        database: 'sensoreamento',
        port: 5432,
        password: '123456'
    }
}

const knex = require('knex')(config);

module.exports = {
    knex : knex
}