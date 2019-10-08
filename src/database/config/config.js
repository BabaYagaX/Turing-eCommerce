require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.TEST_DB_USER,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    dialect: 'mysql',
    ...(process.env.TEST_DB_PASS && { password: process.env.TEST_DB_PASS })
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
  },
};
