exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Dave', 
          userId: 'dave', 
          password: 'password123', 
          email: 'dave@galvanize.com'
        },
        {
          name: 'Elizabeth', 
          userId: 'elizabeth', 
          password: 'password123', 
          email: 'elizabeth@email.com'
        },
        {
          name: 'John', 
          userId: 'john', 
          password: 'password123', 
          email: 'john@email.com'
        },
        {
          name: 'Mary', 
          userId: 'mary', 
          password: 'password123', 
          email: 'mary@email.com'
        },
        {
          name: 'Isabella', 
          userId: 'isabella', 
          password: 'password123', 
          email: 'isabella@email.com'
        }
      ]);
    });
};