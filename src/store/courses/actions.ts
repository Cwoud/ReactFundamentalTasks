import { CoursesPayload } from '../../components/interface'
import { ADD_COURSE, DELETE_COURSE, GET_COURSES, UPDATE_COURSE } from './types'

const getCourses = (payload: CoursesPayload) => {
  return {
    type: GET_COURSES,
    payload: payload,
  }
}

const addCourse = (payload: CoursesPayload) => {
  return {
    type: ADD_COURSE,
    payload: payload,
  }
}

const updateCourse = (payload: CoursesPayload) => {
  return {
    type: UPDATE_COURSE,
    payload: payload,
  }
}

const deleteCourse = () => {
  return {
    type: DELETE_COURSE,
  }
}

const coursesActions = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
}

export default coursesActions
