const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() // creates .env file
const { errorHandler } = require('./middlewares/errorMiddleware')

const connectDB = require('./config/db')
connectDB()

const port = process.env.PORT || 5000

const app = express()

// middlewares for req.body error handling
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler) // will override default express error handler

app.listen(port, () => console.log(`Server running on port ${port}`))

