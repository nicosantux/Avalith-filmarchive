const { useState, useEffect } = require('react')
const { searchMovie } = require('services/movies')

const useSearch = (title) => {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    if (title !== '') {
      searchMovie(title)
        .then(({ movies }) => {
          setSearchResults(movies)
          setIsLoading(false)
        })
        .catch(() => setErrors(true))
    }

    return () => {
      setSearchResults([])
      setIsLoading(true)
      setErrors(false)
    }
  }, [title])

  return { searchResults, isLoading, errors }
}

export { useSearch }
