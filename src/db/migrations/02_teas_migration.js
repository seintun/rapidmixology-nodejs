exports.up = function(knex, Promise) {
  return knex.schema.createTable('teas', (table) =>{
    table.increments('id');
    table.string('name').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('');
    table.string('description', 255).defaultTo('');
    table.boolean('caffeine').notNullable();
    table.integer('caffeine_level').defaultTo(0);
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teas');
};