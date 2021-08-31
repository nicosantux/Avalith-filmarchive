const db = require('mysql')

// db connection
const connection = db.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
})

connection.connect((err) => {
  if (err) throw err

  console.log('DB connected')
})

module.exports = connection
