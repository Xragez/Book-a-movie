import { useContext } from 'react'
import AuthContext from '../context/auth-context'


/**
 * hook for change state of authentication
 * 
 * @returns [auth, setAuth] authentication
 */
export function useAuth() {
  const authContext = useContext(AuthContext)

  const auth = authContext.user

  const setAuth = (user) => {
    if (user) {
      // login
      authContext.login(user)
      window.localStorage.setItem('token', JSON.stringify(user))
    } else {
      // logout
      authContext.logout()
      window.localStorage.removeItem('token')
    }
  }

  return [auth, setAuth]
}