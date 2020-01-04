const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()
const db = mongoose.connection

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(session({
  secret: 'feedmeseymour',
  resave: false,
  saveUnitialized: false
}))

const starwarsController = require('./controllers/starwars.js')
app.use('/starwars', starwarsController)

const usersController = require('./controllers/users.js')
app.use('/users', usersController)

const sessionController = require('./controllers/session.js')
app.use('/session', sessionController)

mongoose.connect('mongodb://localhost:27017/meancrud', {useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
  console.log('connected to mongoose')
})

app.listen(3000, () => {
  console.log('listening')
})
