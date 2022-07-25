import React from 'react'
import { Link } from 'react-router-dom'
import { userRole } from '../../../constants'
import { formatCreationDate } from '../../../helpers/formatCreationDate'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { deleteCourse } from '../../../store/courses/thunk'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { AuthorInfo, CourseDetails } from '../../interface'
import {
  ButtonWrapper,
  CourseContainer,
  DescriptionWrapper,
  LeftContainer,
  RightContainer,
  SectionTitle,
  ShowCourseButton,
  TitleWrapper,
} from './styled-components'

type CourseCardProps = {
  courseInfo: CourseDetails
  authorList: AuthorInfo[]
}
function CourseCard(props: CourseCardProps) {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const isAdmin = user.role === userRole.ADMIN
  const { authorList, courseInfo } = props
  const { id, title, description, duration, authors, creationDate } = courseInfo

  const authorsArr = authors.map((author) =>
    authorList
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
      <CourseContainer>
        <LeftContainer>
          <TitleWrapper>{title}</TitleWrapper>
          <DescriptionWrapper>{description}</DescriptionWrapper>
        </LeftContainer>

        <RightContainer>
          <div>
            <SectionTitle>{'Authors: '}</SectionTitle>
            {getAuthors()}
          </div>
          <div>
            <SectionTitle>{'Duration: '}</SectionTitle>
            {getCourseDuration(duration)}
          </div>
          <div>
            <SectionTitle>{'Created: '}</SectionTitle>
            {formatCreationDate(creationDate)}
          </div>
          <ButtonWrapper>
            <Link to={`/courses/${id}`}>
              <ShowCourseButton
                buttonName={'Show course'}
                onButtonClick={() => {}}
                type={'button'}
              />
            </Link>
            {isAdmin && (
              <Link to={`/courses/update/${id}`}>
                <ShowCourseButton
                  buttonName={'Update Course'}
                  onButtonClick={() => {}}
                  type={'button'}
                />
              </Link>
            )}
            {isAdmin && (
              <ShowCourseButton
                buttonName={'Delete'}
                onButtonClick={() => {
                  dispatch(deleteCourse(id))
                }}
                type={'button'}
              />
            )}
          </ButtonWrapper>
        </RightContainer>
      </CourseContainer>
    </>
  )
}
export default CourseCard
