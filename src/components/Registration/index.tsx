import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../common/Button'
import Input from '../../common/Input'
import { UserInfo } from '../interface'
import {
  RegisterButtonWrapper,
  RegisterContainer,
  RegisterWrapper,
} from './styled-components'

function Registration() {
  const history = useHistory()
  const registerInitialState: UserInfo = {
    name: '',
    email: '',
    password: '',
  }
  const [registerData, setRegisterData] =
    useState<UserInfo>(registerInitialState)

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, name: e.target.value })
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, email: e.target.value })
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, password: e.target.value })
  }

  const onRegisterData = async () => {
    const url = 'http://localhost:4000/register'
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    }
    try {
      const fetchResponse = await fetch(url, settings)
      const data = await fetchResponse.json()
      history.push('./login')
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
    <RegisterContainer>
      <form onSubmit={submitHandler}>
        <RegisterWrapper>
          <h3>{'Registration'}</h3>
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
          <RegisterButtonWrapper>
            <Button
              onButtonClick={() => {}}
              type={'submit'}
              buttonName={'Registration'}
            />
          </RegisterButtonWrapper>
          {'If you have an account you can '}
          <Link to='/login'>{'Login'}</Link>
        </RegisterWrapper>
      </form>
    </RegisterContainer>
  )
}

export default Registration
