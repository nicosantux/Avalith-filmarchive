import React from 'react'
import { useGetMovies } from 'hooks/useGetMovies'
import Movie from 'components/Movie'
import Navbar from 'components/Navbar'
import Spinner from 'components/Spinner'
import { ErrorMessage, MoviesGrid } from 'elements/movies'

const Home = () => {
  const { movies, isLoading, errors } = useGetMovies()

  return (
    <>
      <Navbar />
      {errors ? (
        <ErrorMessage>There was a problem loading the movies</ErrorMessage>
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <MoviesGrid>
              {movies &&
                movies.length &&
                movies.map((movie) => {
                  return <Movie key={movie.id} {...movie} />
                })}
            </MoviesGrid>
          )}
        </>
      )}
    </>
  )
}

export default Home
