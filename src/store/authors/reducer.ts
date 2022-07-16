import { AuthorInfo, AuthorsPayload } from '../../components/interface'
import { ADD_AUTHOR, GET_AUTHORS } from './types'

type AuthorsAction = {
  type: string //name of the action
  payload: AuthorsPayload
}

export const authorsInitialState: AuthorInfo[] = []

const authorsReducer = (
  state: AuthorInfo[] = authorsInitialState,
  action: AuthorsAction
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
