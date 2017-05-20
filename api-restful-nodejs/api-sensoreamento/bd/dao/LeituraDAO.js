var knex = require('../KnexConfig.js').knex;
var table = 'leitura'

module.exports = {
    findAll: () => {
        return knex(table).select()
    },
    find: (where) => {
        return knex(table).select().where(where)
    },
    findWithDispositivo: (where) => {
        return knex(table).select().join('dispositivo', 'dispositivo.id', table+'.dispositivo_id').where(where)
    }
}