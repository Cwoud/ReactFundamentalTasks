import { CoursesPayload, NewCourse } from '../../components/interface'
import coursesActions from './actions'

export const getCourses = () => {
  return async (dispatch: any, getState: any) => {
    const url = 'http://localhost:4000/courses/all'
    try {
      const response = await fetch(url)
      const data: CoursesPayload = await response.json()
      dispatch(coursesActions.getCourses(data))
    } catch (e) {
      return e
    }
  }
}
export const addCourse = (courseDetails: NewCourse) => {
  return async (dispatch: any, getState: any) => {
    const url = 'http://localhost:4000/courses/add'
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') as string,
      },
      body: JSON.stringify(courseDetails),
    }
    try {
      const response = await fetch(url, settings)
      const data = await response.json()
      dispatch(coursesActions.addCourse(data))
      return data
    } catch (e) {
      return e
    }
  }
}
export const updateCourse = (courseId: string, courseDetails: NewCourse) => {
  return async (dispatch: any, getState: any) => {
    const url = `http://localhost:4000/courses/${courseId}`
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') as string,
      },
      body: JSON.stringify(courseDetails),
    }
    try {
      const response = await fetch(url, settings)
      const data = await response.json()
      if (data.successful) {
        dispatch(coursesActions.updateCourse(data))
      }
      return data
    } catch (e) {
      return e
    }
  }
}
export const deleteCourse = (courseId: string) => {
  return async (dispatch: any, getState: any) => {
    const url = `http://localhost:4000/courses/${courseId}`
    const settings = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: localStorage.getItem('token') as string,
      },
    }
    try {
      const response = await fetch(url, settings)
      const data = await response.json()
      if (data.successful) {
        dispatch(coursesActions.deleteCourse())
        dispatch(getCourses())
      }
      return data
    } catch (e) {
      return e
    }
  }
}
