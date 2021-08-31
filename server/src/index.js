require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000

// read and parse body
app.use(express.json())

// cors
app.use(cors())

// routes
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/movies'))

// listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
