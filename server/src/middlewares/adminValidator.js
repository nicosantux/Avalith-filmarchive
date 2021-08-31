const { response } = require('express')

const adminValidator = (req, res = response, next) => {
  const { role } = req

  if (role !== 'admin') {
    return res.status(401).json({
      error: true,
      msg: 'You do not have the permission to access this site',
    })
  }

  next()
}

module.exports = {
  adminValidator,
}
