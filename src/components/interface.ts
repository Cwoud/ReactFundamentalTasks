export type CourseDetails = {
  id: string
  title: string
  description: string
  creationDate: string
  duration: number
  authors: string[]
}

export type NewCourse = {
  title: string
  description: string
  duration: number
  authors: string[]
}

export type NewAuthor = {
  name: string
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

export type CoursesPayload = {
  successful: boolean
  result: CourseDetails[] | CourseDetails | string
}

export type AddCoursePayload = {
  successful: boolean
  result: CourseDetails
}

export type AuthorsPayload = {
  successful: boolean
  result: AuthorInfo | AuthorInfo[]
}
