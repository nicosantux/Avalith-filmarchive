const { response } = require('express')
const db = require('../database/database')

const queries = {
  getMovies: 'SELECT id, title, genre, director, plot, poster, year FROM movies',
  getMovieByTitle:
    'SELECT id, title, genre, director, plot, poster, year FROM movies WHERE title LIKE ?',
  getMovieByID: 'SELECT id, title, genre, director, plot, poster, year FROM movies WHERE id = ?',
  getFavoritesMovies:
    'SELECT movies.id, title, genre, director, plot, poster, year FROM movies INNER JOIN favorites ON movies.id = favorites.movie_id INNER JOIN users ON users.id = favorites.user_id WHERE users.id = ?',
  addToFavorites: 'INSERT INTO favorites SET ?',
  deleteFavorite: 'DELETE FROM favorites WHERE user_id = ? AND movie_id = ?',
  addMovie: 'INSERT INTO movies SET ?',
  editMovie: 'UPDATE movies SET ? WHERE id = ?',
}

// -------------- guest role --------------

const getMovies = (req, res = response) => {
  db.query(queries.getMovies, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    if (result.length === 0) {
      return res.json({
        error: false,
        msg: 'There is not content in the database',
      })
    }

    return res.json({
      error: false,
      movies: result,
    })
  })
}

const getMovieByTitle = (req, res = response) => {
  const { title } = req.query

  const titleLike = `%${title}%`

  db.query(queries.getMovieByTitle, titleLike, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    if (result.length === 0) {
      return res.json({
        error: false,
        msg: `There is not a movie with the title ${title}`,
        movies: result,
      })
    }

    return res.json({
      error: false,
      movies: result,
    })
  })
}

const getMovieByID = (req, res = response) => {
  const { id } = req.query

  db.query(queries.getMovieByID, id, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    if (result.length === 0) {
      return res.json({
        error: true,
        msg: `There is not a movie with the id ${id}`,
      })
    }

    return res.json({
      error: false,
      movie: result[0],
    })
  })
}

// -------------- user role --------------

const getFavoritesMovies = (req, res = response) => {
  const { uid } = req.query

  db.query(queries.getFavoritesMovies, uid, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    return res.json({
      error: false,
      movies: result,
    })
  })
}

const addToFavorites = (req, res = response) => {
  const { uid, idMovie } = req.body

  const newFavorite = {
    user_id: Number(uid),
    movie_id: Number(idMovie),
  }

  db.query(queries.addToFavorites, newFavorite, (error) => {
    if (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.json({
          error: true,
          msg: 'The movie is already in favorites',
        })
      } else {
        return res.status(500).json({
          error: true,
          msg: 'Database error',
        })
      }
    }

    return res.json({
      error: false,
      msg: 'Movie added to favorites successfully',
    })
  })
}

const deleteFavorite = (req, res = response) => {
  const { uid, idMovie } = req.body

  db.query(queries.deleteFavorite, [uid, idMovie], (error) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    return res.json({
      error: false,
      msg: 'Movie removed from favorites',
    })
  })
}

// -------------- admin role --------------

const addMovie = (req, res = response) => {
  const newMovie = req.body

  db.query(queries.addMovie, newMovie, (error) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    return res.status(201).json({
      error: false,
      msg: 'Movie added successfully',
    })
  })
}

const editMovie = (req, res = response) => {
  const { id } = req.params
  const { title, genre, director, plot, poster, year } = req.body

  db.query(queries.getMovieByID, id, (error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        msg: 'Database error',
      })
    }

    if (result.length === 0) {
      return res.json({
        error: false,
        msg: `There is not a movie with the id ${id}`,
      })
    }

    const updatedMovie = {
      id: result[0].id,
      title,
      genre,
      director,
      plot,
      poster,
      year,
    }

    db.query(queries.editMovie, [updatedMovie, id], (error) => {
      if (error) {
        return res.status(500).json({
          error: true,
          msg: 'Database error',
        })
      }

      return res.json({
        error: false,
        msg: 'Movie updated successfully',
      })
    })
  })
}

module.exports = {
  getMovies,
  getMovieByTitle,
  getFavoritesMovies,
  getMovieByID,
  addToFavorites,
  deleteFavorite,
  addMovie,
  editMovie,
}
