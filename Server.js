const express = require('express')
const mongoose = require('mongoose')
const sesssion = require('express-session')
const App = express()

app.use(express.json)
app.use(express.static('public'))
app.use(session({
  secret: 'feedmeseymour',
  resave: false,
  saveUnitialized: false
}))

const starwarsControllers = require('./controllers/starwars.js')
app.use('/starwars', starwarsController)

const usersController = require('./controllers/users.js')
app.use('/users', usersController)

const sessionController = require('./controllers/session.js')
app.use('/session', sessionController)

mongoose.connect('mongodb://localhost:27017/meancrud,' {useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
})

app.listen(4000, () => {
  console.log('listening');
})
