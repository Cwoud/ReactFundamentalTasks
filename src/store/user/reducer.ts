import { AnyAction } from 'redux'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET,
  GET_CURRENT_USER,
  LOGOUT_USER,
} from './types'

export type UserState = {
  isAuth: boolean // default value - false. After success login - true
  name: string // default value - empty string. After success login - name of user
  email: string // default value - empty string. After success login - email of user
  token: string // default value - empty string or token value from localStorage.
  role: string
}

export const initialUserState: UserState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  role: '',
}

const userReducer = (
  state: UserState = initialUserState,
  action: AnyAction
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...initialUserState,
        isAuth: action.payload.successful,
        name: action.payload.user.name,
        email: action.payload.user.email,
        token: action.payload.result,
      }

    case LOGIN_FAIL:
      return {
        ...initialUserState,
      }
    case LOGIN_RESET: {
      return initialUserState
    }
    case GET_CURRENT_USER: {
      return {
        ...initialUserState,
        isAuth: state.isAuth,
        name: action.payload.result.name,
        email: action.payload.result.email,
        token: state.token,
        role: action.payload.result.role,
      }
    }
    case LOGOUT_USER: {
      return initialUserState
    }

    default:
      return state
  }
}

export default userReducer
