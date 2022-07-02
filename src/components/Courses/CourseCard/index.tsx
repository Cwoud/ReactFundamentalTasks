import React from 'react'
import { Link } from 'react-router-dom'
import { mockedAuthorsList } from '../../../constants'
import { formatCreationDate } from '../../../helpers/formatCreationDate'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { CourseDetails } from '../../interface'
import {
  ButtonWrapper,
  CourseContainer,
  DescriptionWrapper,
  LeftContainer,
  RightContainer,
  SectionTitle,
  StartCourseButton,
  TitleWrapper,
} from './styled-components'

type CourseCardProps = {
  courseInfo: CourseDetails
  onSelectCourse: (id: string) => void
}
function CourseCard(props: CourseCardProps) {
  const { id, title, description, duration, authors, creationDate } =
    props.courseInfo
  const { onSelectCourse, courseInfo } = props
  const authorsArr = authors.map((author) =>
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
              <StartCourseButton
                buttonName={'Show course'}
                onButtonClick={() => {
                  onSelectCourse(id)
                }}
                type={'button'}
              />
            </Link>
          </ButtonWrapper>
        </RightContainer>
      </CourseContainer>
    </>
  )
}
export default CourseCard
