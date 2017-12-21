let connection = require('./models/sequelize-connection')

connection.authenticate()
  .then(function(){
    console.log('success!')
  })
  .catch(function(error){
    console.log(error)
  })

let Movie = require('./models/movie')

Movie.findALL() {
  where : {
    movie: 'The 300'
  }
})
