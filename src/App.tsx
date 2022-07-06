import React from 'react'
import { AuthProvider } from './components/hooks/useAuth'
import Routes from './components/Routes'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
