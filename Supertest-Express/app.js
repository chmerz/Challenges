var express = require('express')
var app = express();
var Word = require('./models').Word

app.get('/', (req, res)=>{
  Word.findAll({limit: 1}).then((word)=>{
    res.json({
      greeting: "Hello World",
      wordOfTheDay: word[0]
    })
  })
})
module.exports = app
