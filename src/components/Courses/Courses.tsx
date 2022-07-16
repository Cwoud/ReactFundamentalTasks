import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { Container } from './styled-components'
import SearchBar from './SearchBar'
import { AuthorInfo, CourseDetails } from '../interface'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'
import { getAuthors, getCourses } from '../../services'
import { useDispatch } from 'react-redux'

function Courses() {
  const dispatch = useDispatch()
  const history = useHistory()
  let { url } = useRouteMatch()

  const courses: CourseDetails[] = useAppSelector((state) => state.courses)
  const authors: AuthorInfo[] = useAppSelector((state) => state.authors)

  const [searchValue, setSearchValue] = useState('')
  const [searchCourseList, setSearchCourseList] = useState(courses)

  const onSearchClick = () => {
    const filteredCourse = filterArrayByKeyword(courses, searchValue)
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
      setSearchCourseList(courses)
    }
  }, [searchValue, courses])

  useEffect(() => {
    getCourses(dispatch)
    getAuthors(dispatch)
  }, [])

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
          return <CourseCard courseInfo={courseInfo} authorList={authors} />
        })}
      </Container>
    </>
  )
}

export default Courses
