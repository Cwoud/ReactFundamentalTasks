import React from 'react'
import { InputContainer } from './styled-components'

type InputProps = {
  type: string
  inputName: string
  placeholderText: string
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}
function Input(props: InputProps) {
  const { placeholderText, onValueChange, inputName, type, value } = props

  return (
    <>
      <InputContainer
        name={inputName}
        type={type}
        placeholder={placeholderText}
        onChange={(e) => onValueChange(e)}
        value={value}
      />
    </>
  )
}
export default Input
