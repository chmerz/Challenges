let Sequelize = require('sequelize')
let connection = require('./sequelize-connection')

let movie = connection.define('movie',{
  code: {
    type: Sequelize.STRING,
    field: 'code'
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  },
  genre: {
    type: Sequelize.STRING,
    field: 'genre'
  }
})

module.exports = movie
