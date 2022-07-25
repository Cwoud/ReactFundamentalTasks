import React, { useEffect, useState } from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import { CourseDetails } from '../../interface'

function useUpperContainer(courseDetails: CourseDetails | undefined) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setTitle(e.target.value)
  }
  useEffect(() => {
    if (courseDetails) {
      setTitle(courseDetails.title)
      setDescription(courseDetails.description)
    }
  }, [])
  const renderTitle = () => {
    return (
      <div>
        <div>{'Title'}</div>
        <Input
          type={'text'}
          inputName={'title'}
          onValueChange={onTitleChange}
          placeholderText={'Enter title...'}
          value={title}
        />
        <Button
          buttonName={courseDetails ? 'Update course' : 'Create course'}
          type={'submit'}
        />
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
          value={description}
        />
      </div>
    )
  }
  return { title, description, renderTitle, renderDescription }
}

export default useUpperContainer
