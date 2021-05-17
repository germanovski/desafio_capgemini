
exports.up = knex => knex.schema.createTable('anuncios', table => {
    table.increments('id');
    table.text('nome').notNullable();
    table.datetime('data_inicio', { precision: 6 })
    table.datetime('data_termino', { precision: 6 })
    table.decimal('investimento_por_dia', [10,2]);

    table.integer('cliente_id')
        .references('clientes.id')
        .notNullable()
        .onDelete('CASCADE');
})

exports.down = knex => knex.schema.dropTable('anuncios');
