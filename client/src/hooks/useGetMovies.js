import { useState, useEffect } from 'react'
import { getMovies } from 'services/movies'

const useGetMovies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    getMovies()
      .then(({ movies }) => {
        setMovies(movies)
        setIsLoading(false)
      })
      .catch(() => setErrors(true))

    return () => {
      setMovies([])
      setIsLoading(true)
      setErrors(false)
    }
  }, [])

  return { movies, isLoading, errors }
}

export { useGetMovies }
