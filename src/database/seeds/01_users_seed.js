exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          firstName: 'Dave', 
          lastName: 'Galvanize', 
          userName: 'davegalvie', 
          password: 'password123', 
          email: 'dave@galvanize.com'
        },
        {
          firstName: 'Elizabeth', 
          lastName: 'Galvanize', 
          userName: 'elizabethgalvie', 
          password: 'password123', 
          email: 'elizabeth@email.com'
        },
        {
          firstName: 'John', 
          lastName: 'Galvanize', 
          userName: 'johngalvie', 
          password: 'password123', 
          email: 'john@email.com'
        },
        {
          firstName: 'Mary', 
          lastName: 'Galvanize', 
          userName: 'marygalvie', 
          password: 'password123', 
          email: 'mary@email.com'
        },
        {
          firstName: 'Isabella', 
          lastName: 'Galvanize', 
          userName: 'isabellagalvie', 
          password: 'password123', 
          email: 'isabella@email.com'
        }
      ]);
    });
};