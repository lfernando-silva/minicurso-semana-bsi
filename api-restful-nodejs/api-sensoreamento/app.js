const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const leitura = require('./routes/leitura')
const dispositivo = require('./routes/dispositivo')
const categoriaSensor = require('./routes/categoriaSensor')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
app.use('/leitura', leitura)
app.use('/dispositivo', dispositivo)
app.use('/categoria', categoriaSensor)

app.use((req, res, next) => {
  let err = new Error()
  err.status = 404
  err.message = 'Recurso não encontrado.'
  res.send(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  return res.send(err)
})

module.exports = app
