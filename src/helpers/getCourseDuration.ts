import { HOUR, MINUTE } from '../constants'

export const getHour = (duration: number): number => {
  return Math.floor(duration / HOUR)
}

export const getMinute = (duration: number): number => {
  return duration % MINUTE
}

export const getHourStr = (duration: number): string => {
  const hour = getHour(duration)
  if (hour < 10) {
    return `0${hour}`
  } else {
    return `${hour}`
  }
}

export const getMinuteStr = (duration: number): string => {
  const minute = getMinute(duration)
  if (minute < 10) {
    return `0${minute}`
  } else {
    return `${minute}`
  }
}

export const getTimeStr = (duration: number): string => {
  const hour = getHour(duration)
  return hour === 1 ? 'hour' : 'hours'
}

export const getCourseDuration = (duration: number) => {
  return (
    getHourStr(duration) +
    ':' +
    getMinuteStr(duration) +
    ' ' +
    getTimeStr(duration)
  )
}
