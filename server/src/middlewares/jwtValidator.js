const { response } = require('express')
const jwt = require('jsonwebtoken')

const jwtValidator = (req, res = response, next) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      error: false,
      msg: 'There is not token in the request',
    })
  }

  jwt.verify(token, process.env.KEY, (error, payload) => {
    if (error) {
      return res.status(401).json({
        error: true,
        msg: 'Invalid token',
      })
    }

    req.name = payload.name
    req.uid = payload.uid
    req.role = payload.role
  })

  next()
}

module.exports = { jwtValidator }
