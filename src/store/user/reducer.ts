import { LoginPayload } from '../../components/interface'
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_RESET } from './types'

type UserAction = {
  type: string //name of the action
  payload: LoginPayload
}

type UserState = {
  isAuth: boolean // default value - false. After success login - true
  name: string // default value - empty string. After success login - name of user
  email: string // default value - empty string. After success login - email of user
  token: string // default value - empty string or token value from localStorage.
  // After success login - value from API /login response. See Swagger.
}

export const initialUserState: UserState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
}

const userReducer = (
  state: UserState = initialUserState,
  action: UserAction
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
    default:
      return state
  }
}

export default userReducer
