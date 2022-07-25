import { LoginPayload } from '../../components/interface'
import {
  GET_CURRENT_USER,
  LOGIN_FAIL,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from './types'

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

const getCurrentUser = (payload: any) => {
  return {
    type: GET_CURRENT_USER,
    payload: payload,
  }
}

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}

const userActions = {
  loginSuccess,
  loginFail,
  loginReset,
  getCurrentUser,
  logoutUser,
}

export default userActions
