'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'rapidmixology'
    },
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: './src/db/migrations'
  //   },
  //   seeds: {
  //     directory: './src/db/seeds'
  //   }
  // },
  // test: {
  //   client: 'pg',
  //   connection: {
  //     host: 'localhost',
  //     database: 'rapidmixology_test'
  //   },
  //   migrations: {
  //     directory: './src/db/migrations'
  //   },
  //   seeds: {
  //     directory: './src/db/seeds'
  //   }
  // }
};