const dotenv = require('dotenv').config();
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const connectionString = process.env.DB_CONNECTION_STRING; // Use dot notation - remember how process.env looked like an object?

module.exports = {
  development: {
    client: "pg",
    connection: connectionString,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
