import { AuthorsPayload } from '../../components/interface'
import { ADD_AUTHOR, GET_AUTHORS } from './types'

const getAuthors = (payload: AuthorsPayload) => {
  return {
    type: GET_AUTHORS,
    payload: payload,
  }
}

const addAuthor = (payload: AuthorsPayload) => {
  return {
    type: ADD_AUTHOR,
    payload: payload,
  }
}
const authorsActions = {
  getAuthors,
  addAuthor,
}

export default authorsActions
