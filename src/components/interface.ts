export type CourseDetails = {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export type AuthorInfo = {
  id: string
  name: string
}

export type IRoute = {
  path: string
  name: string
  exact: boolean
  component: any
  props?: any
}

export type UserInfo = {
  name: string
  email: string
  password: string
}

export type userLoginInfo = {
  email: string
  name: string
}

export type LoginPayload = {
  result: string
  successful: boolean
  user: userLoginInfo
}
