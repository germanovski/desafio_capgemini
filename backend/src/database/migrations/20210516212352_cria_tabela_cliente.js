
exports.up = knex => knex.schema.createTable('clientes', function(table){
      table.increments('id');
      table.text('nome').notNullable();
      table.text('email').notNullable();
})

exports.down = knex  => knex.schema.dropTable('clientes');

