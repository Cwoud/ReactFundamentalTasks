import React from 'react'
import { BottomContainer, UpperContainer } from './styled-components'
import useUpperContainer from './hooks/useUpperContainer'
import useBottomContainer from './hooks/useBottomContainer'
import { CourseDetails, NewCourse } from '../interface'
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addCourse, updateCourse } from '../../store/courses/thunk'
import { useRouteMatch } from 'react-router-dom'

function CourseForm() {
  const dispatch = useAppDispatch()
  const history = useHistory()
  let { url } = useRouteMatch()
  const courseList: CourseDetails[] = useAppSelector((state) => state.courses)

  const getCourseId = () => {
    const isUpdate = url.includes('update')
    return isUpdate ? url.replace('/courses/update/', '').trim() : undefined
  }
  const courseId = getCourseId()
  const getSelectCourseInfo = (id: string | undefined) => {
    return courseList.find((course) => course.id === id)
  }
  const courseDetails = getSelectCourseInfo(courseId) as CourseDetails

  const { title, description, renderTitle, renderDescription } =
    useUpperContainer(courseDetails)
  const {
    duration,
    courseAuthor,
    renderAddAuthor,
    renderDuration,
    renderAuthorsAvailable,
    renderAuthorsList,
  } = useBottomContainer(courseDetails)
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      title === '' ||
      description === '' ||
      duration === 0 ||
      courseAuthor.length === 0
    ) {
      alert('Please fill in all fields!')
    } else if (courseDetails && courseId) {
      const authors = courseAuthor.map((author) => author.id)
      const updatedCourse: NewCourse = {
        title: title,
        description: description,
        duration: duration,
        authors: authors,
      }
      dispatch(updateCourse(courseId, updatedCourse))
      history.goBack()
    } else {
      const authors = courseAuthor.map((author) => author.id)
      const newCourse: NewCourse = {
        title: title,
        description: description,
        duration: duration,
        authors: authors,
      }
      dispatch(addCourse(newCourse))
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

export default CourseForm
