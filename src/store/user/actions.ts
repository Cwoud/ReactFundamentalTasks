import { LoginPayload } from '../../components/interface'
import { LOGIN_FAIL, LOGIN_RESET, LOGIN_SUCCESS } from './types'

const loginSuccess = (payload: LoginPayload) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  }
}

const loginFail = (payload: any) => {
  return {
    type: LOGIN_FAIL,
    payload: payload,
  }
}

const loginReset = () => {
  return {
    type: LOGIN_RESET,
  }
}

const userActions = {
  loginSuccess,
  loginFail,
  loginReset,
}

export default userActions
