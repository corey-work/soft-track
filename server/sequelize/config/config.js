require('dotenv').config();

module.exports = {
  development: {
    username: process.env.pgUser,
    host: process.env.pgHost,
    database: process.env.pgDatabase,
    password: process.env.pgPassword,
    port: process.env.pgPort,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
