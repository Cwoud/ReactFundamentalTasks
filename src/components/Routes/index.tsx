import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../../App'
import { mockedAuthorsList, mockedCoursesList } from '../../constants'
import CourseInfo from '../CourseInfo'
import Courses from '../Courses'
import CreateCourse from '../CreateCourse'
import Header from '../Header'
import { CourseDetails } from '../interface'
import Login from '../Login'
import Registration from '../Registration'

function Routes() {
  const [courseList, setCourseList] = useState(mockedCoursesList)
  const [authorList, setAuthorList] = useState(mockedAuthorsList)

  const addNewCourse = (newCourse: CourseDetails) => {
    setCourseList([...courseList, newCourse])
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' children={<App />} />
          <Route path='/registration' children={<Registration />} />
          <Route path='/login' children={<Login />} />
          <Route
            exact
            path='/courses'
            children={
              <Courses courseList={courseList} authorList={authorList} />
            }
          />
          <Route
            path='/courses/add'
            children={
              <CreateCourse
                onAddCourse={addNewCourse}
                authorList={authorList}
                setAuthorList={setAuthorList}
              />
            }
          />
          <Route
            path='/courses/:courseId'
            children={<CourseInfo courseList={courseList} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
