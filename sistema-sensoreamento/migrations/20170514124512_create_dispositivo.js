
exports.up = function(knex, Promise) {
      return knex.schema
        .createTable('dispositivo', t => {
            t.increments('id').unsigned().primary()
            t.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
            t.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
            t.dateTime('deactivated_at')
            t.text('nome').notNull()
            t.integer('categoria_dispositivo_id')
            t.foreign('categoria_dispositivo_id').references('categoria_dispositivo.id')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('dispositivo')
};
