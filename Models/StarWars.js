const mongoose = require('mongoose')

const starwarsSchema = new mongoose.Schema({
  Title: {type: String},
  Poster: {type: String},
  Actors: {type: String},
  Runtime: {type: String},
  Plot: {type: String}
})

const StarWars = mongoose.model('StarWars', starwarsSchema)

module.exports = StarWars
