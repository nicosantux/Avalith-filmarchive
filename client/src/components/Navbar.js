import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'
import { logout } from 'services/auth'
import { Header, Nav, Title, MenuItem, LinksContainer } from 'elements/nav'

import MobileNav from './MobileNav'

const Navbar = () => {
  const { user, setUser } = useAuth()
  const history = useHistory()
  let menu

  const handleLogout = () => {
    logout()
    setUser(null)
    history.push('/home')
  }

  if (user && user.role === 'admin') {
    menu = (
      <>
        <MenuItem to="/add-movie">Add movie</MenuItem>
        <MenuItem to="/search">Search</MenuItem>
        <MenuItem to="/favorites">Favorites</MenuItem>
        <MenuItem to="/home" onClick={handleLogout}>
          Logout
        </MenuItem>
      </>
    )
  } else if (user) {
    menu = (
      <>
        <MenuItem to="/search">Search</MenuItem>
        <MenuItem to="/favorites">Favorites</MenuItem>
        <MenuItem to="/home" onClick={handleLogout}>
          Logout
        </MenuItem>
      </>
    )
  } else {
    menu = (
      <>
        <MenuItem to="/search">Search</MenuItem>
        <MenuItem to="/register">Register</MenuItem>
        <MenuItem to="/auth">Login</MenuItem>
      </>
    )
  }

  return (
    <Header>
      <Nav>
        <div>
          <Title to="/home">
            <span>film</span>archive
          </Title>
        </div>
        <LinksContainer>{menu}</LinksContainer>
        <MobileNav />
      </Nav>
    </Header>
  )
}

export default Navbar
