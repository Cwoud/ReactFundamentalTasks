import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import userActions from '../../store/user/actions'
import Logo from './Logo'
import {
  ButtonWrapper,
  HeaderContainer,
  LogoutButton,
  LogoWrapper,
} from './styled-components'
import { onLogout } from '../../store/user/thunk'

function Header() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const history = useHistory()

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      {user.isAuth && (
        <ButtonWrapper>
          {user.name}
          <LogoutButton
            buttonName={'Logout'}
            onButtonClick={() => {
              dispatch(userActions.loginReset())
              localStorage.clear()
              history.push('/login')
            }}
            type={'button'}
          />
        </ButtonWrapper>
      )}
    </HeaderContainer>
  )
}

export default Header
