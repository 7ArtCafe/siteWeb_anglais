const knex = require('knex')

const pg = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'testpgAdmin',
    database : '7artCafe'
  },
  searchPath: ['knex', 'public'],
});

module.exports = pg;