import { DOT, SLASH } from '../constants'

export const formatCreationDate = (date: string) => {
  return date.replaceAll(SLASH, DOT)
}
