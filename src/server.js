const express = require('express')
const config = require('./config')
const exphbs = require('express-handlebars')
const router = require('./router')
const path = require('path')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use('/', express.static(path.join(__dirname, '..', 'static')))
app.use('/', router)

app.listen(config.port, () => {
  console.log(`Listening for connections on ${config.port}`)
})
