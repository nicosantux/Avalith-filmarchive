const { response } = require('express')
const db = require('../database/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const queries = {
  login:
    'SELECT users.id, first_name, last_name, email, password, roles.role FROM users INNER JOIN roles ON users.role = roles.id WHERE email = ?',
  register: 'INSERT INTO users SET ?',
  isEmailValid: 'SELECT email FROM users WHERE email = ?',
}

const login = (req, res = response) => {
  const { email, password } = req.body

  db.query(queries.login, email, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    if (result.length === 0) {
      return res.json({
        error: true,
        msg: 'There is not an account registered with this email',
      })
    }

    const { id: uid, first_name: name, password: hashedPassword, role } = result[0]

    bcrypt.compare(password, hashedPassword, (error, success) => {
      if (error) {
        return res.status(500).json({
          error: true,
          msg: error.message,
        })
      }

      if (!success) {
        return res.status(400).json({
          error: true,
          msg: 'Email or password are invalid',
        })
      }

      const token = jwt.sign({ uid, name, role }, process.env.KEY)

      return res.json({
        error: false,
        msg: 'Login successful',
        uid,
        name,
        token,
        role,
      })
    })
  })
}

const register = (req, res = response) => {
  const { firstName, lastName, email, password } = req.body

  db.query(queries.isEmailValid, email, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    if (result.length !== 0) {
      return res.status(409).json({
        error: true,
        msg: 'There is an account registered with this email',
      })
    }

    const hashedPassword = bcrypt.hashSync(password)

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
      role: 1,
    }

    db.query(queries.register, newUser, (error, result) => {
      if (error) {
        return res.status(500).json({
          error: true,
          msg: 'Database error',
        })
      }

      const token = jwt.sign(
        { uid: result.insertId, name: firstName, role: 'user' },
        process.env.KEY,
      )

      return res.status(201).json({
        error: false,
        msg: 'User registered successfully',
        uid: result.insertId,
        name: firstName,
        token,
        role: 'user',
      })
    })
  })
}

module.exports = {
  login,
  register,
}
