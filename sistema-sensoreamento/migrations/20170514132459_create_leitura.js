
exports.up = function(knex, Promise) {
      return knex.schema
        .createTable('leitura', t => {
            t.increments('id').unsigned().primary()
            t.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
            t.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
            t.dateTime('deactivated_at')
            t.text('valor').notNull()
            t.integer('dispositivo_id').unsigned().index().references('id').inTable('dispositivo')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('leitura')
};
