const mongoose = require('mongoose')

const starwarsSchema = new mongoose.Schema({
  description: String,
  complete: Boolean
})

const StarWars = mongoose.model('StarWars', starwarsSchema)

module.exports = StarWars
