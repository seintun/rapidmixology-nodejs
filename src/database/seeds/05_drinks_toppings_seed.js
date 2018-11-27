exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks_toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks_toppings').insert([
        {
          drink_id: 1,
          topping_id: 3
        },
        {
          drink_id: 1,
          topping_id: 5
        },
        {
          drink_id: 2,
          topping_id: 6
        },
        {
          drink_id: 2,
          topping_id: 3
        },
        {
          drink_id: 2,
          topping_id: 2
        },
        {
          drink_id: 2,
          topping_id: 7
        },
        {
          drink_id: 3,
          topping_id: 8
        },
        {
          drink_id: 3,
          topping_id: 4
        },
        {
          drink_id: 4,
          topping_id: 1
        },
        {
          drink_id: 5,
          topping_id: 5
        },
        {
          drink_id: 5,
          topping_id: 4
        },
        {
          drink_id: 6,
          topping_id: 3
        },
        {
          drink_id: 6,
          topping_id: 11
        },
        {
          drink_id: 7,
          topping_id: 2
        },
        {
          drink_id: 8,
          topping_id: 9
        },
        {
          drink_id: 8,
          topping_id: 10
        },

      ]);
    });
};
