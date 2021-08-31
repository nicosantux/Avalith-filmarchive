const router = require('express').Router()
const { check } = require('express-validator')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { login, register } = require('../controllers/auth')

router.post(
  '/auth',
  [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Enter a valid email address').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have a minimum of 6 characters').isLength({ min: 6 }),
    fieldValidator,
  ],
  login,
)

router.post(
  '/register',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('firstName', 'First name must have a maximum of 20 characters').isLength({ max: 20 }),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('lastName', 'Last name must have a maximum of 20 characters').isLength({ max: 20 }),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Enter a valid email address').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have a minimum of 6 characters').isLength({ min: 6 }),
    fieldValidator,
  ],
  register,
)

module.exports = router
