import React from 'react'
import { InputContainer } from './styled-components'

type InputProps = {
  type: string
  inputName: string
  placeholderText: string
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function Input(props: InputProps) {
  const { placeholderText, onValueChange, inputName, type } = props

  return (
    <>
      <InputContainer
        name={inputName}
        type={type}
        placeholder={placeholderText}
        onChange={(e) => onValueChange(e)}
      />
    </>
  )
}
export default Input
