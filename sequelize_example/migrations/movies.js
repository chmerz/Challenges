//We require the Movie definition setup in our model
let connection = require('../models/sequelize-connection')
let Movie = require('../models/movie')

//These are the sample movies we are going to create
let movies = [
  {
    code: '101',
    title: 'Kill Bill',
    genre: 'Action'
  },
  {
    code: '102',
    title: 'The 300',
    genre: 'Action'
  }
]

//This function will be called after the table is setup in Postgres and will insert the new records
function createRecords(){
  let promises = movies.map(function(movie){
    return new Promise(function(resolve,reject){
      return Movie.create(movie)
    })
  })

  return Promise.all(promises)
}


//sync creates the table based on the sequelize definition and returns a promise
Movie.sync({force: true})
  .then(function(){
    console.log('success! movies table created')

    //in the promise, we go ahead and create the new records.
    createRecords()
  })
  .catch(function(error){
    //Just in case something goes wrong, lets print it out
    console.log(error)
  })
