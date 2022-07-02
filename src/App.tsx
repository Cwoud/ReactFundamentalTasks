import React, { useEffect, useState } from 'react'
import Courses from './components/Courses'
import CreateCourse from './components/CreateCourse'
import Header from './components/Header'
import { CourseInfo } from './components/interface'
import { mockedCoursesList } from './constants'

function App() {
  const [courseList, setCourseList] = useState(mockedCoursesList)
  const [isCreateCourse, setIsCreateCourse] = useState(false)

  const addNewCourse = (newCourse: CourseInfo) => {
    setCourseList([...courseList, newCourse])
    setIsCreateCourse(false)
  }
  useEffect(() => {}, [isCreateCourse, courseList])
  return (
    <>
      <Header username={'Xinyun'} />

      {isCreateCourse ? (
        <CreateCourse onAddCourse={addNewCourse} />
      ) : (
        <Courses courseList={courseList} setAddCourse={setIsCreateCourse} />
      )}
    </>
  )
}

export default App
