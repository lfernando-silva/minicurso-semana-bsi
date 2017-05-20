var knex = require('../KnexConfig.js').knex;
const table = 'dispositivo'

module.exports = {
    findAllIds: () => {
        return knex.select('id').from(table).orderBy('id','asc')
    }
}