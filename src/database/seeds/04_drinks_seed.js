exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        {
          tea_id: 11,
          milk: true, 
          sugar: 0.75,
          ice: 0.50
        },
        {
          tea_id: 14,
          milk: true, 
          sugar: 0.75,
          ice: 0.50
        },
        {
          tea_id: 21,
          milk: false, 
          sugar: 0.75,
          ice: 0.25
        },
        {
          tea_id: 5,
          milk: true, 
          sugar: 0.75,
          ice: 0.75
        },
        {
          tea_id: 9,
          milk: false, 
          sugar: 0.25,
          ice: 0.50
        },
        {
          tea_id: 3,
          milk: false, 
          sugar: 0.75,
          ice: 0.50
        },
        {
          tea_id: 22,
          milk: true, 
          sugar: 0.75,
          ice: 0.25
        },
        {
          tea_id: 24,
          milk: true, 
          sugar: 0.50,
          ice: 0.50
        }
      ]);
    });
};