import React from 'react'
import { mockedAuthorsList } from '../../../constants'
import { formatCreationDate } from '../../../helpers/formatCreationDate'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { CourseInfo } from '../../interface'
import {
  ButtonWrapper,
  CourseContainer,
  DescriptionWrapper,
  InfoWrapper,
  LeftContainer,
  RightContainer,
  SectionTitle,
  StartCourseButton,
  TitleWrapper,
} from './styled-components'

type CourseCardProps = {
  courseInfo: CourseInfo
}
function CourseCard(props: CourseCardProps) {
  const { id, title, description, duration, authors, creationDate } =
    props.courseInfo

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
            <StartCourseButton
              buttonName={'Show course'}
              onButtonClick={() => {}}
              type={'button'}
            />
          </ButtonWrapper>
        </RightContainer>
      </CourseContainer>
    </>
  )
}
export default CourseCard
