import styled from 'styled-components'
import Button from '../../../common/Button'

export const CourseContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-gap: 30px;
  border: 3px solid green;
  padding: 20px;
  margin: 20px 20px 20px 20px;
`

export const TitleWrapper = styled.h3``
export const DescriptionWrapper = styled.div``
export const InfoWrapper = styled.div``
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`
export const LeftContainer = styled.div``
export const SectionTitle = styled.span`
  font-weight: bold;
`
export const StartCourseButton = styled(Button)``
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
`
