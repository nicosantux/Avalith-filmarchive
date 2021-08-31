import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { useGetMovieByID } from 'hooks/useGetMovieByID'
import { useGetFavorites } from 'hooks/useGetFavorites'
import Navbar from 'components/Navbar'
import Spinner from 'components/Spinner'
import Alert from 'components/Alert'
import { addToFavorites, removeFromFavorites } from 'services/movies'
import {
  MovieContainer,
  PosterContainer,
  Poster,
  Title,
  Info,
  BtnContainer,
  Btn,
  IconContainer,
  Icon,
} from 'elements/movies'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MovieDetails = () => {
  const { user } = useAuth()
  const history = useHistory()
  const { movies } = useGetFavorites()
  const { id } = useParams()
  const { movie, isLoading, errors } = useGetMovieByID(id)
  const [alertType, setAlertType] = useState({ type: '', message: '' })
  const [alert, setAlert] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (movies && movies.length > 0) {
      if (movies.some((movie) => movie.id === Number(id))) {
        setIsFavorite(true)
      }
    }
  }, [id, movies, isFavorite])

  const handleAddToFavorites = () => {
    addToFavorites(user.uid, id, user.token)
      .then((res) => {
        if (res.error) {
          setAlert(true)
          setAlertType({ type: 'error', message: res.msg })
        } else {
          setAlert(true)
          setAlertType({ type: 'success', message: 'Movie added to favorites' })
        }
      })
      .catch(() => {
        setAlert(true)
        setAlertType({ type: 'error', message: 'There was a problem adding the movie' })
      })
  }

  const handleRemoveFavorite = () => {
    removeFromFavorites(user.uid, id, user.token)
      .then(() => {
        setAlert(true)
        setAlertType({ type: 'success', message: 'Movie removed from favorites' })
      })
      .catch(() => {
        setAlert(true)
        setAlertType({ type: 'error', message: 'There was a problem deleting the movie' })
      })
  }

  const handleEditMovie = () => {
    history.push(`/edit-movie/${id}`)
  }

  const handleBack = () => {
    history.goBack()
  }

  return (
    <>
      <Navbar />
      {errors ? (
        <p>There was a problem loading the movies</p>
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {movie && (
                <MovieContainer>
                  <IconContainer>
                    <Icon icon={faArrowLeft} onClick={handleBack} />
                  </IconContainer>
                  <PosterContainer>
                    <Poster alt={movie.title} src={movie.poster} />
                  </PosterContainer>
                  <div>
                    <Title>{movie.title}</Title>
                    <Info>Director: {movie.director}</Info>
                    <Info>Genre: {movie.genre}</Info>
                    <Info>Year: {movie.year}</Info>
                    <Info>Plot: {movie.plot}</Info>
                  </div>
                  {user && (
                    <>
                      <BtnContainer>
                        {isFavorite ? (
                          <Btn color="danger" onClick={handleRemoveFavorite}>
                            Remove from favorites
                          </Btn>
                        ) : (
                          <Btn onClick={handleAddToFavorites}>Add to favorites</Btn>
                        )}
                        {user.role === 'admin' && <Btn onClick={handleEditMovie}>Edit Movie</Btn>}
                      </BtnContainer>
                    </>
                  )}
                </MovieContainer>
              )}
            </>
          )}
        </>
      )}
      <Alert alert={alert} message={alertType.message} setAlert={setAlert} type={alertType.type} />
    </>
  )
}

export default MovieDetails
