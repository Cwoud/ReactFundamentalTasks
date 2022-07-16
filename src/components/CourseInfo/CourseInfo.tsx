import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import Button from '../../common/Button'
import { mockedAuthorsList } from '../../constants'
import { formatCreationDate } from '../../helpers/formatCreationDate'
import { getCourseDuration } from '../../helpers/getCourseDuration'
import { useAppSelector } from '../hooks/hooks'
import { CourseDetails } from '../interface'

function CourseInfo() {
  const history = useHistory()
  const courseList: CourseDetails[] = useAppSelector((state) => state.courses)
  let { url } = useRouteMatch()
  const courseId = url.replace('/courses/', '').trim()
  const getSelectCourseInfo = (id: string) => {
    return courseList.find((course) => course.id === id)
  }
  const courseDetails = getSelectCourseInfo(courseId) as CourseDetails
  const authorsArr = courseDetails.authors.map((author) =>
    mockedAuthorsList
      .filter((authorInfo) => authorInfo.id === author)
      .map((author) => {
        return author.name
      })
  )
  const getAuthors = () => {
    return authorsArr.join(', ')
  }
  return (
    <>
      <Button
        type={'button'}
        buttonName={'Go back la'}
        onButtonClick={() => history.goBack()}
      />
      <div>
        <h3>{courseDetails.title}</h3>
        <div>
          <div>{courseDetails.description}</div>
          <div>
            <div>
              {'ID: '}
              {courseDetails.id}
            </div>
            <div>
              {'Duration: '}
              {getCourseDuration(courseDetails.duration)}
            </div>
            <div>
              {'Created: '}
              {formatCreationDate(courseDetails.creationDate)}
            </div>
            <div>
              {'Authors: '}
              {getAuthors()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseInfo
