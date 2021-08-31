import { useState, useEffect } from 'react'
import { getFavorites } from 'services/movies'

import { useAuth } from './useAuth'

const useGetFavorites = () => {
  const { user } = useAuth()
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    if (user?.uid && user?.token) {
      getFavorites(user.uid, user.token)
        .then(({ movies }) => {
          setMovies(movies)
          setIsLoading(false)
        })
        .catch(() => setErrors(true))
    }

    return () => {
      setMovies([])
      setIsLoading(true)
      setErrors(false)
    }
  }, [user])

  return { movies, isLoading, errors }
}

export { useGetFavorites }
