var knex = require('../KnexConfig.js').knex;
var table = 'dispositivo'

module.exports = {
    findAll: () => {
        return knex(table).select()
    },
    find: (where) => {
        return knex(table).select().where(where)
    },
    insert: newDispositivo => {
        return knex(table).insert(newDispositivo)
    },
    update: (updated, where) => {
        return knex(table).update(updated).where(where)
    },
    remove: where => {
        return knex(table).where(where).del()
    }
}