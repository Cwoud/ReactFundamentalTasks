import { AuthorsPayload, NewAuthor } from '../../components/interface'
import authorsActions from './actions'

export const fetchAuthors = () => {
  return async (dispatch: any, getState: any) => {
    const response: any = await fetch('http://localhost:4000/authors/all')
    const data: AuthorsPayload = await response.json()
    dispatch(authorsActions.getAuthors(data))
  }
}

export const addAuthor = (newAuthor: NewAuthor) => {
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
  return async (dispatch: any, getState: any) => {
    const response = await fetch(url, settings)
    const data = await response.json()
    dispatch(authorsActions.addAuthor(data))
  }
}
