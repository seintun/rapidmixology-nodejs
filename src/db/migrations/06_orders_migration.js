exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) =>{
    table.increments('id')
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.integer('drink_id')
      .notNullable()
      .references('id')
      .inTable('drinks')
      .onDelete('CASCADE');
    table.decimal('price').notNull();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};