import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { UserInfo } from '../interface'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/hooks'
import { onLogin } from '../../services'

function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useAppSelector((state) => state.user)

  const loginInitialState: UserInfo = {
    name: '',
    email: '',
    password: '',
  }
  const [loginData, setLoginData] = useState<UserInfo>(loginInitialState)

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, name: e.target.value })
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, email: e.target.value })
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, password: e.target.value })
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(loginData, dispatch)
  }

  useEffect(() => {
    if (user.isAuth) {
      history.push('./courses')
      localStorage.setItem('username', user.name)
      localStorage.setItem('token', user.token)
    }
  }, [user, history])
  return (
    <>
      <form onSubmit={submitHandler}>
        <h3>{'Login'}</h3>
        <div>
          <label>{'Name'}</label>
        </div>
        <Input
          type={'text'}
          inputName={'name'}
          placeholderText={'Enter name'}
          onValueChange={(e) => {
            onNameChange(e)
          }}
        />
        <div>
          <label>{'Email'}</label>
        </div>
        <Input
          type={'email'}
          inputName={'email'}
          placeholderText={'Enter email'}
          onValueChange={(e) => {
            onEmailChange(e)
          }}
        />
        <div>
          <label>{'Password'}</label>
        </div>
        <Input
          type={'password'}
          inputName={'password'}
          placeholderText={'Enter password'}
          onValueChange={(e) => {
            onPasswordChange(e)
          }}
        />
        <Button onButtonClick={() => {}} type={'submit'} buttonName={'Login'} />
      </form>
      {'If you not have an account you can '}
      <Link to='/registration'>{'Registration'}</Link>
    </>
  )
}

export default Login
