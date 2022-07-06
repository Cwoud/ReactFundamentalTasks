import React from 'react'
import Logo from './Logo'
import {
  ButtonWrapper,
  HeaderContainer,
  LogoutButton,
  LogoWrapper,
} from './styled-components'

type HeaderProps = {
  username: string
}
function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <ButtonWrapper>
        {props.username}
        <LogoutButton
          buttonName={'Logout'}
          onButtonClick={() => {}}
          type={'button'}
        />
      </ButtonWrapper>
    </HeaderContainer>
  )
}

export default Header
