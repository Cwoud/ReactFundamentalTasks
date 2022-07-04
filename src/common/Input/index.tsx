import React from 'react'
import { InputContainer } from './styled-components'

type InputProps = {
  inputName: string
  placeholderText: string
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function Input(props: InputProps) {
  const { placeholderText, onValueChange, inputName } = props

  return (
    <>
      <InputContainer
        name={inputName}
        type='text'
        placeholder={placeholderText}
        onChange={(e) => onValueChange(e)}
      />
    </>
  )
}
export default Input
