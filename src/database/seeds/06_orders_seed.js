exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          user_id: 3,
          drink_id: 2, 
          total: 3.50
        },
        {
          user_id: 1,
          drink_id: 1, 
          total: 4.50
        },
        {
          user_id: 2,
          drink_id: 8, 
          total: 7.50
        },
        {
          user_id: 1,
          drink_id: 7, 
          total: 3.50
        },
        {
          user_id: 4,
          drink_id: 2, 
          total: 5.50
        },
        {
          user_id: 5,
          drink_id: 4, 
          total: 4.75
        },
        {
          user_id: 3,
          drink_id: 7, 
          total: 2.75
        },
        {
          user_id: 3,
          drink_id: 2, 
          total: 6.50
        }
      ]);
    });
};