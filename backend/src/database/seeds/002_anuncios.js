
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('anuncios').del()
    .then(function () {
      // Inserts seed entries
      return knex('anuncios').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
    });
};
