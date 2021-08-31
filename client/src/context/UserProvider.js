import React, { useState, useEffect } from 'react'

export const userContext = React.createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const uid = localStorage.getItem('uid')
  const name = localStorage.getItem('name')
  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (uid && name && role && token) {
      setUser({ uid, name, role, token })
      setIsLoading(false)
    } else {
      setUser(null)
      setIsLoading(false)
    }
  }, [uid, name, role, token, setUser, setIsLoading])

  return (
    <userContext.Provider value={{ user, setUser }}>{!isLoading && children}</userContext.Provider>
  )
}

export default UserProvider
