exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('firstName').notNullable().defaultTo('');
      table.string('lastName').notNullable().defaultTo('');
      table.string('userName').notNullable().defaultTo('');
      table.string('password').notNullable().defaultTo('');
      table.string('email').notNullable().defaultTo('');
      table.timestamps(true,true);
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};