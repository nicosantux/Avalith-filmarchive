import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from 'hooks/useAuth'
import { logout } from 'services/auth'
import { MobileContainer, MobileMenu, MobileMenuItem, MobileLinksContainer } from 'elements/nav'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileNav = () => {
  const { user, setUser } = useAuth()
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false)
  let menu

  const handleLogout = () => {
    logout()
    setUser(null)
    history.push('/home')
  }

  if (user && user.role === 'admin') {
    menu = (
      <>
        <MobileMenuItem to="/add-movie">Add movie</MobileMenuItem>
        <MobileMenuItem to="/search">Search</MobileMenuItem>
        <MobileMenuItem to="/favorites">Favorites</MobileMenuItem>
        <MobileMenuItem as="button" onClick={handleLogout}>
          Logout
        </MobileMenuItem>
      </>
    )
  } else if (user) {
    menu = (
      <>
        <MobileMenuItem to="/search">Search</MobileMenuItem>
        <MobileMenuItem to="/favorites">Favorites</MobileMenuItem>
        <MobileMenuItem as="button" onClick={handleLogout}>
          Logout
        </MobileMenuItem>
      </>
    )
  } else {
    menu = (
      <>
        <MobileMenuItem to="/search">Search</MobileMenuItem>
        <MobileMenuItem to="/auth">Login</MobileMenuItem>
        <MobileMenuItem to="/register">Register</MobileMenuItem>
      </>
    )
  }

  return (
    <MobileContainer>
      {showMenu ? (
        <MobileMenu icon={faTimes} onClick={() => setShowMenu(!showMenu)} />
      ) : (
        <MobileMenu icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      )}
      <AnimatePresence>
        {showMenu && (
          <MobileLinksContainer
            animate={{ opacity: 1, y: 0 }}
            as={motion.div}
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, transition: 'easeInOut' }}
          >
            {menu}
          </MobileLinksContainer>
        )}
      </AnimatePresence>
    </MobileContainer>
  )
}

export default MobileNav
