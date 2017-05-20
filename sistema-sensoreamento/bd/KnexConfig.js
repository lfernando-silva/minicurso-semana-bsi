var EnvConfigs = require('../configs/configs.json').development.db

var config = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        database: 'sensoreamento',
        port: 5432,
        password: '123456'
    }
}

var knex = require('knex')(config);

module.exports = {
    knex : knex
}