exports.up = function(knex, Promise) {
  return knex.schema.createTable('drinks_toppings', (table) =>{
    table.integer('drink_id')
      .notNullable()
      .references('id')
      .inTable('drinks')
      .onDelete('CASCADE');
    table.integer('topping_id')
      .notNullable()
      .references('id')
      .inTable('toppings')
      .onDelete('CASCADE'); 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drinks_toppings');
};