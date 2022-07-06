import React from 'react'

type InputProps = {
  placeholderText: string
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function Input(props: InputProps) {
  const { placeholderText, onValueChange } = props

  return (
    <>
      <input
        type='text'
        placeholder={placeholderText}
        onChange={(e) => onValueChange(e)}
      />
    </>
  )
}
export default Input
