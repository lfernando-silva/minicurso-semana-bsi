var knex = require('../KnexConfig.js').knex;
var table = 'leitura'

module.exports = {
    findAll: () => {
        return knex(table).select()
    },
    find: (where) => {
        return knex(table).select().where(where)
    }
}