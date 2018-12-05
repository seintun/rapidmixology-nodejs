exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('userName').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('token');
      table.timestamps(true,true);
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};