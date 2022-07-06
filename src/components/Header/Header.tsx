import React from 'react'
import { useHistory } from 'react-router'
import useAuth from '../hooks/useAuth'
import Logo from './Logo'
import {
  ButtonWrapper,
  HeaderContainer,
  LogoutButton,
  LogoWrapper,
} from './styled-components'

function Header() {
  const history = useHistory()
  const { isAuthenticated, logout, username } = useAuth()
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      {isAuthenticated && (
        <ButtonWrapper>
          {username}
          <LogoutButton
            buttonName={'Logout'}
            onButtonClick={() => {
              logout()
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
