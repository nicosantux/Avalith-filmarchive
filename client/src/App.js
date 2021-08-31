import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from 'pages/HomePage'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Favorites from 'pages/Favorites'
import SearchMovie from 'pages/Search'
import MovieDetails from 'pages/MovieDetails'
import AddMovie from 'pages/AddMovie'
import EditMovie from 'pages/EditMovie'
import { AppContainer } from 'elements/app'
import UserRoute from 'routes/UserRoute'
import AdminRoute from 'routes/AdminRoute'
import GuestRoute from 'routes/GuestRoute'

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <AdminRoute path="/edit-movie/:id">
            <EditMovie />
          </AdminRoute>
          <AdminRoute path="/add-movie">
            <AddMovie />
          </AdminRoute>
          <UserRoute path="/favorites">
            <Favorites />
          </UserRoute>
          <Route exact component={MovieDetails} path="/movie-details/:id" />
          <Route exact component={SearchMovie} path="/search" />
          <GuestRoute path="/auth">
            <Login />
          </GuestRoute>
          <GuestRoute path="/register">
            <Register />
          </GuestRoute>
          <Route exact component={Homepage} path="/home" />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
