exports.up = function(knex, Promise) {
  return knex.schema.createTable('drinks', (table) =>{
    table.increments('id')
    table.integer('tea_id')
      .notNullable()
      .references('id')
      .inTable('teas')
      .onDelete('CASCADE');
    table.boolean('milk').notNullable();
    table.float('sugar').defaultTo(1);
    table.float('ice').defaultTo(1);
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drinks');
};