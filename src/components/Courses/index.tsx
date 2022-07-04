import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { Container } from '../Courses/styled-components'
import SearchBar from './SearchBar'
import { AuthorInfo, CourseDetails } from '../interface'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom'

type CoursesProps = {
  courseList: CourseDetails[]
  authorList: AuthorInfo[]
}
function Courses(props: CoursesProps) {
  const history = useHistory()
  let { url } = useRouteMatch()
  const { courseList, authorList } = props
  const [searchValue, setSearchValue] = useState('')
  const [searchCourseList, setSearchCourseList] = useState(courseList)

  const onSearchClick = () => {
    const filteredCourse = filterArrayByKeyword(courseList, searchValue)
    setSearchCourseList(filteredCourse)
  }

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const filterArrayByKeyword = (arr: CourseDetails[], keyword: string) => {
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
    if (searchValue === '') {
      setSearchCourseList(courseList)
    }
  }, [searchValue, courseList])

  return (
    <>
      <Container>
        <SearchBar
          onSearchValueChange={onSearchValueChange}
          onSearch={onSearchClick}
          onAdd={() => {
            history.push(`${url}/add`)
          }}
        />
        {searchCourseList.map((courseInfo) => {
          return <CourseCard courseInfo={courseInfo} authorList={authorList} />
        })}
      </Container>
    </>
  )
}

export default Courses
