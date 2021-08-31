const getMovies = async () => {
  const url = process.env.REACT_APP_API_URL

  try {
    const res = await fetch(`${url}/movies`)

    return res.json()
  } catch (error) {
    return error
  }
}

const searchMovie = async (title) => {
  const url = process.env.REACT_APP_API_URL

  try {
    const res = await fetch(`${url}/search?title=${title}`)

    return res.json()
  } catch (error) {
    return error
  }
}

const getMovieById = async (id) => {
  const url = process.env.REACT_APP_API_URL

  try {
    const res = await fetch(`${url}/movie?id=${id}`)

    return res.json()
  } catch (error) {
    return error
  }
}

const addToFavorites = async (uid, idMovie, token) => {
  const url = process.env.REACT_APP_API_URL

  const data = {
    uid,
    idMovie,
  }

  try {
    const res = await fetch(`${url}/add-favorites`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
    })

    return res.json()
  } catch (error) {
    return error
  }
}

const removeFromFavorites = async (uid, idMovie, token) => {
  const url = process.env.REACT_APP_API_URL

  const data = {
    uid,
    idMovie,
  }

  try {
    const res = await fetch(`${url}/delete-favorite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(data),
    })

    return res.json()
  } catch (error) {
    return error
  }
}

const getFavorites = async (uid, token) => {
  const url = process.env.REACT_APP_API_URL

  try {
    const res = await fetch(`${url}/favorites?uid=${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
    })

    return res.json()
  } catch (error) {
    return error
  }
}

const addMovie = async (movie, token) => {
  const url = process.env.REACT_APP_API_URL

  try {
    const res = await fetch(`${url}/add-movie`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
    })

    return res.json()
  } catch (error) {
    return error
  }
}

const editMovie = async (id, movie, token) => {
  const url = process.env.REACT_APP_API_URL

  try {
    const res = await fetch(`${url}/edit-movie/${id}`, {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
    })

    return res.json()
  } catch (error) {
    return error
  }
}

export {
  getMovies,
  searchMovie,
  getMovieById,
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  addMovie,
  editMovie,
}
