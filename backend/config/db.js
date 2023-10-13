const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    // .cyan.underline came from colors package imported in server.js

  } catch (error) {
    console.log(error)
    process.exit(1)
    
    // process.exit(1) means end the process with some failure and process.exit(0) means end the process without any kind of failure
  }
}


module.exports = connectDB