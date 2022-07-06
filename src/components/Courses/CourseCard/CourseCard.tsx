import React from 'react'
import { Link } from 'react-router-dom'
import { formatCreationDate } from '../../../helpers/formatCreationDate'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { AuthorInfo, CourseDetails } from '../../interface'
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
  authorList: AuthorInfo[]
}
function CourseCard(props: CourseCardProps) {
  const { authorList, courseInfo } = props
  const { id, title, description, duration, authors, creationDate } = courseInfo
  console.log({ authorList })
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
              <StartCourseButton
                buttonName={'Show course'}
                onButtonClick={() => {}}
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
