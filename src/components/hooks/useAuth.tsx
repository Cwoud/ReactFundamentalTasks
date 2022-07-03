import React, { useContext, useState } from 'react'
const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  username: '',
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem('token')
    return token !== null
  })

  const username = localStorage.getItem('username') as string
  const login = () => {
    setAuthenticated(true)
  }
  const logout = () => setAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  )
}

export default useAuth
