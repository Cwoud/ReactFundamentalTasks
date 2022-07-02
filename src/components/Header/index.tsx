import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Logo from './Logo'
import {
  ButtonWrapper,
  HeaderContainer,
  LogoutButton,
  LogoWrapper,
} from './styled-components'

type HeaderProps = {
  username: string | null
}
function Header(props: HeaderProps) {
  const history = useHistory()

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <ButtonWrapper>
        {props.username}
        <LogoutButton
          buttonName={'Logout'}
          onButtonClick={() => {
            localStorage.clear()
            history.push('/login')
          }}
          type={'button'}
        />
      </ButtonWrapper>
    </HeaderContainer>
  )
}

export default Header
