import { LoginPayload, UserInfo } from '../../components/interface'
import loginActions from './actions'

export const onLogin = (loginData: UserInfo) => {
  return async (dispatch: any, getState: any) => {
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
      dispatch(getCurrentUserInfo(data.result))
      return data
    } catch (e) {
      dispatch(loginActions.loginFail(e))
      return e
    }
  }
}

export const onLogout = (token: string) => {
  return async (dispatch: any, getState: any) => {
    const url = 'http://localhost:4000/logout'
    const settings = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: token,
      },
    }
    try {
      const response = await fetch(url, settings)
      const data = await response.json()
      if (data) {
        dispatch(loginActions.loginReset())
        // dispatch(loginActions.logoutUser())
      }
      return
    } catch (e) {
      return e
    }
  }
}
export const getCurrentUserInfo = (token: string) => {
  return async (dispatch: any, getState: any) => {
    const url = 'http://localhost:4000/users/me'
    const settings = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: token,
      },
    }
    try {
      const response = await fetch(url, settings)
      const data = await response.json()
      dispatch(loginActions.getCurrentUser(data))
    } catch (e) {
      return e
    }
  }
}
