import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'

const UserRoute = ({ children, ...props }) => {
  const { user } = useAuth()

  if (user) {
    return <Route {...props}>{children}</Route>
  } else {
    return <Redirect to="/home" />
  }
}

export default UserRoute
