import React from 'react'
import { BottomContainer, UpperContainer } from './styled-components'
import useUpperContainer from './hooks/useUpperContainer'
import useBottomContainer from './hooks/useBottomContainer'
import { NewCourse } from '../interface'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { addCourse } from '../../services'

function CreateCourse() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { title, description, renderTitle, renderDescription } =
    useUpperContainer()
  const {
    duration,
    courseAuthor,
    renderAddAuthor,
    renderDuration,
    renderAuthorsAvailable,
    renderAuthorsList,
  } = useBottomContainer()
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      title === '' ||
      description === '' ||
      duration === 0 ||
      courseAuthor.length === 0
    ) {
      alert('Please fill in all fields!')
    } else {
      const authors = courseAuthor.map((author) => author.id)
      const newCourse: NewCourse = {
        title: title,
        description: description,
        duration: duration,
        authors: authors,
      }
      addCourse(newCourse, dispatch)
      history.goBack()
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <UpperContainer>
          {renderTitle()}
          {renderDescription()}
        </UpperContainer>
        <BottomContainer>
          <div>
            {renderAddAuthor()}
            {renderDuration()}
          </div>
          <div>
            {renderAuthorsAvailable()}
            {renderAuthorsList()}
          </div>
        </BottomContainer>
      </form>
    </div>
  )
}

export default CreateCourse
