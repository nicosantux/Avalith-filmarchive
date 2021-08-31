import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { useGetFavorites } from 'hooks/useGetFavorites'
import Movie from 'components/Movie'
import Navbar from 'components/Navbar'
import Spinner from 'components/Spinner'
import { ErrorMessage, MoviesGrid } from 'elements/movies'

const Favorites = () => {
  const { user } = useAuth()
  const { movies, isLoading, errors } = useGetFavorites(user.uid, user.token)

  return (
    <div>
      <Navbar />
      {errors ? (
        <ErrorMessage>There was a problem loading the movies</ErrorMessage>
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {movies && movies.length ? (
                <MoviesGrid>
                  {movies.map((movie) => {
                    return <Movie key={movie.id} {...movie} />
                  })}
                </MoviesGrid>
              ) : (
                <ErrorMessage>There is not movies in favorites</ErrorMessage>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Favorites
