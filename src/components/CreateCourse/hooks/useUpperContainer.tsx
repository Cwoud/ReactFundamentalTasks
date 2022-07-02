import React, { useState } from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'

function useUpperContainer() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setTitle(e.target.value)
  }
  const renderTitle = () => {
    return (
      <div>
        <div>{'Title'}</div>
        <Input
          inputName={'title'}
          onValueChange={onTitleChange}
          placeholderText={'Enter title...'}
        />
        <Button buttonName={'Create course'} type={'submit'} />
      </div>
    )
  }

  const renderDescription = () => {
    return (
      <div>
        <h4>{'Description'}</h4>
        <textarea
          placeholder='Enter Description...'
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
      </div>
    )
  }
  return { title, description, renderTitle, renderDescription }
}

export default useUpperContainer
