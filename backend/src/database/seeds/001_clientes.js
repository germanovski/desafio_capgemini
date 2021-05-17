exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clientes').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientes').insert([
        {nome: 'Matheus', email: 'mail@mail.com'},
        {nome: 'Denis', email: 'meuemail@mail.com'},
      ]);
    });
};
