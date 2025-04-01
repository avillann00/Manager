const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/manager')
  .then(() => console.log('db connected'))
  .catch((error) => console.log('error connecting to db: ', error))


const app = express()

app.listen(5000, () => console.log('server started on port 5000'))
