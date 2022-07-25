import React from 'react'
import { userRole } from '../../constants'
import { useAppSelector } from '../hooks/hooks'
import { Redirect } from 'react-router-dom'

function PrivateRoutes({ children }: any) {
  const user = useAppSelector((state) => state.user)
  const auth = user.isAuth && user.role === userRole.ADMIN
  return auth ? children : <Redirect to='/login' />
}
export default PrivateRoutes
