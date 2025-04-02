const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/manager')
  .then(() => console.log('db connected'))
  .catch((error) => console.log('error connecting to db: ', error))


const app = express()

const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

const userRouter = require('./routes/userRoutes')
app.use('/api/user', userRouter)

app.listen(5000, () => console.log('server started on port 5000'))
