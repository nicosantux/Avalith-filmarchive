import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { useGetMovieByID } from 'hooks/useGetMovieByID'
import Navbar from 'components/Navbar'
import Input from 'components/Input'
import Alert from 'components/Alert'
import { editMovie } from 'services/movies'
import { regex } from 'helpers/regex'
import { Title, Form, BtnContainer, Btn } from 'elements/form'

const EditMovie = () => {
  const { id } = useParams()
  const { movie, isLoading } = useGetMovieByID(id)
  const { user } = useAuth()
  const [title, setTitle] = useState({ value: '', valid: null })
  const [director, setDirector] = useState({ value: '', valid: null })
  const [genre, setGenre] = useState({ value: '', valid: null })
  const [year, setYear] = useState({ value: '', valid: null })
  const [plot, setPlot] = useState({ value: '', valid: null })
  const [poster, setPoster] = useState({ value: '', valid: null })
  const [alertType, setAlertType] = useState({ type: '', message: '' })
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setTitle({ value: movie.title, valid: 'true' })
      setDirector({ value: movie.director, valid: 'true' })
      setGenre({ value: movie.genre, valid: 'true' })
      setYear({ value: movie.year, valid: 'true' })
      setPlot({ value: movie.plot, valid: 'true' })
      setPoster({ value: movie.poster, valid: 'true' })
    }
  }, [isLoading, movie.title, movie.director, movie.genre, movie.year, movie.plot, movie.poster])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      title.valid === 'true' &&
      director.valid === 'true' &&
      genre.valid === 'true' &&
      year.valid === 'true' &&
      plot.valid === 'true' &&
      poster.valid === 'true'
    ) {
      const movie = {
        title: title.value,
        director: director.value,
        genre: genre.value,
        year: year.value,
        plot: plot.value,
        poster: poster.value,
      }

      editMovie(id, movie, user.token)
        .then(({ msg }) => {
          setAlert(true)
          setAlertType({ type: 'success', message: msg })
        })
        .catch(() => {
          setAlert(true)
          setAlertType({ type: 'error', message: 'There was a problem editing the movie' })
        })
    } else {
      setAlert(true)
      setAlertType({ type: 'error', message: 'Complete the form correctly' })
    }
  }

  return (
    <>
      <Navbar />
      <Title>Edit movie</Title>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          error="Title must have at least 2 characters"
          name="title"
          placeholder="Movie title"
          regex={regex.title}
          setState={setTitle}
          state={title}
          type="text"
        />
        <Input
          error="Director must have at least 2 characters"
          name="Director"
          placeholder="Director"
          regex={regex.title}
          setState={setDirector}
          state={director}
          type="text"
        />
        <Input
          error="Genre must have at least 2 characters"
          name="genre"
          placeholder="Genre"
          regex={regex.title}
          setState={setGenre}
          state={genre}
          type="text"
        />
        <Input
          error="Year must have 4 digits"
          name="year"
          placeholder="Year"
          regex={regex.year}
          setState={setYear}
          state={year}
          type="text"
        />
        <Input
          error="Plot must have 10 to 255 characters"
          name="plot"
          placeholder="Plot"
          regex={regex.plot}
          setState={setPlot}
          state={plot}
          type="text"
        />
        <Input
          error="Poster must be and URL valid"
          name="poster"
          placeholder="Poster URL"
          regex={regex.poster}
          setState={setPoster}
          state={poster}
          type="text"
        />
        <BtnContainer>
          <Btn>Edit movie</Btn>
        </BtnContainer>
      </Form>
      <Alert alert={alert} message={alertType.message} setAlert={setAlert} type={alertType.type} />
    </>
  )
}

export default EditMovie
