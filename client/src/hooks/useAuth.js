import { useContext } from 'react'
import { userContext } from 'context/UserProvider'

export const useAuth = () => {
  const { user, setUser } = useContext(userContext)

  return { user, setUser }
}
