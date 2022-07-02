import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { LoginPayload, UserInfo } from '../interface'
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
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

  const onRegisterData = async () => {
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
      localStorage.setItem('username', data.user.name)
      localStorage.setItem('token', data.result.replace('Bearer', '').trim())
      history.push('./courses')
      return data
    } catch (e) {
      return e
    }
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onRegisterData()
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h3>{'Login'}</h3>
        <div>
          <label>{'Name'}</label>
        </div>
        <Input
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
