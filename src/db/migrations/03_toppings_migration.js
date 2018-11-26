exports.up = function(knex, Promise) {
  return knex.schema.createTable('toppings', (table) =>{
    table.increments('id');
    table.string('name').notNullable().defaultTo('');
    table.string('description', 500).defaultTo('');
    table.integer('calorie').defaultTo(0);
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('toppings');
};