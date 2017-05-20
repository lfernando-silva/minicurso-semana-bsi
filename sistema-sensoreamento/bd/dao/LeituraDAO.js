var knex = require('../KnexConfig.js').knex;
var table = 'leitura'

module.exports = {
    insert: (leitura) => {
        return knex(table).insert(leitura)
    }
}