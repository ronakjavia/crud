const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

const connectToDB = () => {
  mongoose
    // .connect('mongodb://localhost:27017/server')
    .connect('mongodb://127.0.0.1:27017/server')
    .then(() => {
      console.log('Sucessfully connected')
    })
    .catch((e) => {
      console.log('err', e)
      process.exit(1)
    })
}
connectToDB()

const userRoutes = require('./routes/userRoutes')

app.use('/', userRoutes)

module.exports = app
