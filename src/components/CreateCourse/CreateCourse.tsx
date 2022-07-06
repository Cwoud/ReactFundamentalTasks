import React from 'react'
import { BottomContainer, UpperContainer } from './styled-components'
import useUpperContainer from './hooks/useUpperContainer'
import useBottomContainer from './hooks/useBottomContainer'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import { CourseInfo } from '../interface'

type CreateCourseProps = {
  onAddCourse: (course: CourseInfo) => void
}
function CreateCourse(props: CreateCourseProps) {
  const { onAddCourse } = props
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
      console.log('oi')
      const date = dayjs().format('DD/MM/YYYY')
      const authors = courseAuthor.map((author) => author.id)
      const newCourse: CourseInfo = {
        id: uuidv4(),
        title: title,
        description: description,
        creationDate: date,
        duration: duration,
        authors: authors,
      }
      console.log(newCourse)
      onAddCourse(newCourse)
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
