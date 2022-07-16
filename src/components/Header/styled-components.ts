import styled from 'styled-components'
import Button from '../../common/Button'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  border: 3px solid #ffb347;
`
export const LogoWrapper = styled.div`
  padding: 20px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const LogoutButton = styled(Button)``
