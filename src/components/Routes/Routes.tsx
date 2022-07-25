import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../../App'
import CourseInfo from '../CourseInfo'
import Courses from '../Courses'
import CourseForm from '../CourseForm'
import Header from '../Header'
import Login from '../Login'
import PrivateRoutes from '../PrivateRoutes'
import Registration from '../Registration'

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' children={<App />} />
          <Route path='/registration' children={<Registration />} />
          <Route path='/login' children={<Login />} />
          <Route exact path='/courses' children={<Courses />} />
          <Route
            path='/courses/add'
            children={
              <PrivateRoutes>
                <CourseForm />
              </PrivateRoutes>
            }
          />
          <Route path='/courses/update/:courseId' children={<CourseForm />} />
          <Route path='/courses/:courseId' children={<CourseInfo />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
