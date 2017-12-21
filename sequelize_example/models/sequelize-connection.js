let Sequelize = require('sequelize')

module.exports = new Sequelize( 'movie_db', 'learn','postgres', {
  host: 'localhost',
  dialect: 'postgres',
})
