import React, { useEffect, useState } from 'react'
import { mockedCoursesList } from '../../constants'
import CourseCard from './CourseCard'
import { Container } from '../Courses/styled-components'
import SearchBar from './SearchBar'
import { CourseInfo } from '../interface'

type CoursesProps = {
  courseList: CourseInfo[]
  // setCourseList: React.Dispatch<React.SetStateAction<CourseInfo[]>>
  setAddCourse: React.Dispatch<React.SetStateAction<boolean>>
}
function Courses(props: CoursesProps) {
  const { courseList, setAddCourse } = props
  const [searchValue, setSearchValue] = useState('')
  const [searchCourseList, setSearchCourseList] = useState(courseList)

  const onSearchClick = () => {
    const filteredCourse = filterArrayByKeyword(courseList, searchValue)
    setSearchCourseList(filteredCourse)
  }

  const onAddCourseClick = () => {
    setAddCourse(true)
  }

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const filterArrayByKeyword = (arr: CourseInfo[], keyword: string) => {
    const results = arr.filter((course) => {
      const isKeywordMatch =
        course.title.toLowerCase() === keyword.toLowerCase() ||
        course.id.toLowerCase() === keyword.toLowerCase()

      if (isKeywordMatch) {
        return course
      }
      return undefined
    })
    return results
  }

  useEffect(() => {
    setSearchCourseList(courseList)
  }, [searchValue])

  return (
    <Container>
      <SearchBar
        onSearchValueChange={onSearchValueChange}
        onSearch={onSearchClick}
        onAdd={onAddCourseClick}
      />
      {searchCourseList.map((courseInfo) => {
        return <CourseCard courseInfo={courseInfo} />
      })}
    </Container>
  )
}

export default Courses
