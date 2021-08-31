const router = require('express').Router()
const { check } = require('express-validator')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { jwtValidator } = require('../middlewares/jwtValidator')
const { adminValidator } = require('../middlewares/adminValidator')

const {
  getMovies,
  getMovieByTitle,
  getFavoritesMovies,
  getMovieByID,
  addToFavorites,
  deleteFavorite,
  addMovie,
  editMovie,
} = require('../controllers/movies')

router.get('/movies', getMovies)

router.get(
  '/search',
  [check('title', 'Title is required').not().isEmpty(), fieldValidator],
  getMovieByTitle,
)

router.get('/favorites', jwtValidator, getFavoritesMovies)

router.get('/movie', [check('id', 'ID is required').not().isEmpty(), fieldValidator], getMovieByID)

router.post(
  '/add-favorites',
  [
    check('uid', 'User ID is required').not().isEmpty(),
    check('idMovie', 'Movie ID is required').not().isEmpty(),
    fieldValidator,
    jwtValidator,
  ],
  addToFavorites,
)

router.delete(
  '/delete-favorite',
  [
    check('uid', 'User ID is required').not().isEmpty(),
    check('idMovie', 'Movie ID is required').not().isEmpty(),
    fieldValidator,
    jwtValidator,
  ],
  deleteFavorite,
)

router.post(
  '/add-movie',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('title', 'Title must have a maximum of 45 characters').isLength({ max: 45 }),
    check('genre', 'Genre is required').not().isEmpty(),
    check('genre', 'Genre must have a maximum of 45 characters').isLength({ max: 45 }),
    check('director', 'Director is required').not().isEmpty(),
    check('director', 'Director must have a maximum of 45 characters').isLength({ max: 45 }),
    check('plot', 'Plot is required').not().isEmpty(),
    check('plot', 'Plot must have a maximum of 255 characters').isLength({ max: 255 }),
    check('poster', 'Poster is required').not().isEmpty(),
    check('poster', 'Poster must have a maximum of 255 characters').isLength({ max: 255 }),
    check('year', 'Year is required').not().isEmpty(),
    check('year', 'Year must have 4 characters').isLength({ min: 4, max: 4 }),
    jwtValidator,
    adminValidator,
    fieldValidator,
  ],
  addMovie,
)

router.put(
  '/edit-movie/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('title', 'Title must have a maximum of 45 characters').isLength({ max: 45 }),
    check('genre', 'Genre is required').not().isEmpty(),
    check('genre', 'Genre must have a maximum of 45 characters').isLength({ max: 45 }),
    check('director', 'Director is required').not().isEmpty(),
    check('director', 'Director must have a maximum of 45 characters').isLength({ max: 45 }),
    check('plot', 'Plot is required').not().isEmpty(),
    check('plot', 'Plot must have a maximum of 255 characters').isLength({ max: 255 }),
    check('poster', 'Poster is required').not().isEmpty(),
    check('poster', 'Poster must have a maximum of 255 characters').isLength({ max: 255 }),
    check('year', 'Year is required').not().isEmpty(),
    check('year', 'Year must have 4 characters').isLength({ min: 4, max: 4 }),
    jwtValidator,
    adminValidator,
    fieldValidator,
  ],
  editMovie,
)

module.exports = router
