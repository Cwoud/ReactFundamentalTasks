import { AnyAction } from 'redux'
import { CourseDetails } from '../../components/interface'
import { ADD_COURSE, DELETE_COURSE, GET_COURSES, UPDATE_COURSE } from './types'

export const coursesInitialState: CourseDetails[] = []

const coursesReducer = (
  state: CourseDetails[] = coursesInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_COURSES:
      return action.payload.result
    case ADD_COURSE:
      return [...state, action.payload.result]
    case UPDATE_COURSE:
      return [...state, action.payload.result]
    case DELETE_COURSE:
      return state
    default:
      return state
  }
}

export default coursesReducer
