import React from 'react'
import { StyledButton } from './styled-components'

type ButtonProps = {
  buttonName: string
  type: 'button' | 'submit' | 'reset' | undefined
  onButtonClick?: () => void
}

function Button(props: ButtonProps) {
  const { buttonName, onButtonClick, type } = props
  return (
    <StyledButton onClick={onButtonClick} type={type}>
      {buttonName}
    </StyledButton>
  )
}

export default Button
