const express = require('express')
const router = express.Router()
const StarWars = require('../models/StarWars.js')

router.get('/', (req, res) => {
  StarWars.find({}, (error, foundStarWars) => {
    res.json(foundStarWars)
  })
})

router.post('/', (req, res) => {
  StarWars.create(req.body, (error, createdStarWars) => {
    res.json(createdStarWars)
  })
})

router.delete('/:id', (req, res) => {
  StarWars.findByIdAndRemove(req.params.id, (error, deletedStarWars) => {
    res.json(deletedStarWars)
  })
})

router.put('/:id', (req, res) => {
  StarWars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedStarWars) => {
    res.json(updatedStarWars)
  })
})

module.exports = router
