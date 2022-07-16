import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatCreationDate } from '../../../helpers/formatCreationDate'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { deleteCourse } from '../../../services'
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
  const dispatch = useDispatch()
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
            <ShowCourseButton
              buttonName={'Update Course'}
              onButtonClick={() => {}}
              type={'button'}
            />
            <ShowCourseButton
              buttonName={'Delete'}
              onButtonClick={() => {
                deleteCourse(id, dispatch)
              }}
              type={'button'}
            />
          </ButtonWrapper>
        </RightContainer>
      </CourseContainer>
    </>
  )
}
export default CourseCard
