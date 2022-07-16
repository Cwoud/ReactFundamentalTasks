import { Dispatch } from 'redux'
import {
  AuthorsPayload,
  CoursesPayload,
  LoginPayload,
  NewAuthor,
  NewCourse,
  UserInfo,
} from './components/interface'
import loginActions from './store/user/actions'
import coursesActions from './store/courses/actions'
import authorsActions from './store/authors/actions'

export const onLogin = async (loginData: UserInfo, dispatch: Dispatch) => {
  const url = 'http://localhost:4000/login'
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  }
  try {
    const response = await fetch(url, settings)
    const data: LoginPayload = await response.json()
    dispatch(loginActions.loginSuccess(data))

    return data
  } catch (e) {
    dispatch(loginActions.loginFail(e))
    return e
  }
}

export const getCourses = async (dispatch: Dispatch) => {
  const url = 'http://localhost:4000/courses/all'
  try {
    const response = await fetch(url)
    const data: CoursesPayload = await response.json()
    dispatch(coursesActions.getCourses(data))
    return data
  } catch (e) {
    return e
  }
}

export const addCourse = async (
  courseDetails: NewCourse,
  dispatch: Dispatch
) => {
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

export const updateCourse = async (
  courseId: string,
  courseDetails: NewCourse,
  dispatch: Dispatch
) => {
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

export const deleteCourse = async (courseId: string, dispatch: Dispatch) => {
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
      getCourses(dispatch)
    }
    return data
  } catch (e) {
    return e
  }
}

export const getAuthors = async (dispatch: Dispatch) => {
  const url = 'http://localhost:4000/authors/all'
  try {
    const response = await fetch(url)
    const data: AuthorsPayload = await response.json()
    dispatch(authorsActions.getAuthors(data))
    return data
  } catch (e) {
    return e
  }
}

export const addAuthor = async (newAuthor: NewAuthor, dispatch: Dispatch) => {
  const url = 'http://localhost:4000/authors/add'
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') as string,
    },
    body: JSON.stringify(newAuthor),
  }
  try {
    const response = await fetch(url, settings)
    const data = await response.json()
    dispatch(authorsActions.addAuthor(data))
    return data
  } catch (e) {
    return e
  }
}
