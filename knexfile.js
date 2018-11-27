'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'rapidmixology'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: './src/database/migrations'
  //   },
  //   seeds: {
  //     directory: './src/database/seeds'
  //   }
  // },
  // test: {
  //   client: 'pg',
  //   connection: {
  //     host: 'localhost',
  //     database: 'rapidmixology_test'
  //   },
  //   migrations: {
  //     directory: './src/database/migrations'
  //   },
  //   seeds: {
  //     directory: './src/database/seeds'
  //   }
  // }
};