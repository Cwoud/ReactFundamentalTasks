import React from 'react'
import { BottomContainer, UpperContainer } from './styled-components'
import useUpperContainer from './hooks/useUpperContainer'
import useBottomContainer from './hooks/useBottomContainer'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import { AuthorInfo, CourseDetails } from '../interface'
import { useHistory } from 'react-router'

type CreateCourseProps = {
  onAddCourse: (course: CourseDetails) => void
  authorList: AuthorInfo[]
  setAuthorList: React.Dispatch<React.SetStateAction<AuthorInfo[]>>
}
function CreateCourse(props: CreateCourseProps) {
  const { onAddCourse, authorList, setAuthorList } = props
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
  } = useBottomContainer({ authorList, setAuthorList })
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
      const date = dayjs().format('DD/MM/YYYY')
      const authors = courseAuthor.map((author) => author.id)
      const newCourse: CourseDetails = {
        id: uuidv4(),
        title: title,
        description: description,
        creationDate: date,
        duration: duration,
        authors: authors,
      }
      onAddCourse(newCourse)
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
