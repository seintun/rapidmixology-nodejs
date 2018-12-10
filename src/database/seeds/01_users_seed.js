exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          firstName: 'Link', 
          lastName: 'Galvanize', 
          userName: 'linkgalvie', 
          password: '$2a$08$.OAFxv7UDXFKp.p14Y/J9.MWMeeiu02fyCqgbzWLWs.GNMpEY5326', 
          email: 'link@galvanize.com'
        },
        {
          firstName: 'Mario', 
          lastName: 'Galvanize', 
          userName: 'mariogalvie', 
          password: '$2a$08$.OAFxv7UDXFKp.p14Y/J9.MWMeeiu02fyCqgbzWLWs.GNMpEY5326', 
          email: 'eliz@email.com'
        },
        {
          firstName: 'John', 
          lastName: 'Galvanize', 
          userName: 'johngalvie', 
          password: '$2a$08$.OAFxv7UDXFKp.p14Y/J9.MWMeeiu02fyCqgbzWLWs.GNMpEY5326', 
          email: 'john@email.com'
        },
        {
          firstName: 'Mary', 
          lastName: 'Galvanize', 
          userName: 'marygalvie', 
          password: '$2a$08$.OAFxv7UDXFKp.p14Y/J9.MWMeeiu02fyCqgbzWLWs.GNMpEY5326', 
          email: 'mary@email.com'
        },
        {
          firstName: 'Yoshi', 
          lastName: 'Galvanize', 
          userName: 'yoshigalvie', 
          password: '$2a$08$.OAFxv7UDXFKp.p14Y/J9.MWMeeiu02fyCqgbzWLWs.GNMpEY5326', 
          email: 'yoshi@email.com'
        }
      ]);
    });
};