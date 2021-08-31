import { useEffect, useState } from 'react'
import { getMovieById } from 'services/movies'

const useGetMovieByID = (id) => {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    getMovieById(id)
      .then(({ movie }) => {
        setMovie(movie)
        setIsLoading(false)
      })
      .catch(() => setErrors(true))

    return () => {
      setMovie({})
      setErrors(false)
      setIsLoading(true)
    }
  }, [id])

  return { movie, isLoading, errors }
}

export { useGetMovieByID }
