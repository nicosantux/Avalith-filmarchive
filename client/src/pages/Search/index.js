import React, { useState } from 'react'
import { useSearch } from 'hooks/useSearch'
import Search from 'components/Search'
import Navbar from 'components/Navbar'
import Movie from 'components/Movie'
import { SearchContainer } from 'elements/search'
import { MoviesGrid, ErrorMessage } from 'elements/movies'

const SearchMovie = () => {
  const [search, setSearch] = useState('')
  const { searchResults, isLoading, errors } = useSearch(search)

  return (
    <>
      <Navbar />
      <SearchContainer>
        <Search search={search} setSearch={setSearch} />
      </SearchContainer>
      {errors ? (
        <ErrorMessage>There was a problem loading the movies</ErrorMessage>
      ) : (
        <>
          {!isLoading &&
            (searchResults && searchResults.length ? (
              <MoviesGrid>
                {searchResults.map((movie) => {
                  return <Movie key={movie.id} {...movie} />
                })}
              </MoviesGrid>
            ) : (
              <ErrorMessage>Movies not found</ErrorMessage>
            ))}
        </>
      )}
    </>
  )
}

export default SearchMovie
