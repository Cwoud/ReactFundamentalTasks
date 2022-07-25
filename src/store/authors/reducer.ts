import { AnyAction } from 'redux'
import { AuthorInfo } from '../../components/interface'
import { ADD_AUTHOR, GET_AUTHORS } from './types'

export const authorsInitialState: AuthorInfo[] = []

const authorsReducer = (
  state: AuthorInfo[] = authorsInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_AUTHORS:
      return action.payload.result
    case ADD_AUTHOR:
      return [...state, action.payload.result]
    default:
      return state
  }
}

export default authorsReducer
