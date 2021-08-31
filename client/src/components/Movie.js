import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Poster, Description, MovieTitle, Year, Genre } from 'elements/movies'

const Movie = ({ id, title, poster, year, genre }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/movie-details/${id}`)
  }

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      onClick={handleClick}
    >
      <Poster alt={title} src={poster} />
      <Description>
        <MovieTitle>{title}</MovieTitle>
        <Year>{year}</Year>
        <Genre>{genre}</Genre>
      </Description>
    </Container>
  )
}

export default Movie
