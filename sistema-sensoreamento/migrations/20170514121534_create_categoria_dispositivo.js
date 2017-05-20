exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('categoria_dispositivo', t => {
            t.increments('id').unsigned().primary()
            t.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
            t.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
            t.dateTime('deactivated_at')
            t.text('descritor').notNull()
            t.text('descricao').notNull()
            t.text('unidade')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('categoria_dispositivo')
};