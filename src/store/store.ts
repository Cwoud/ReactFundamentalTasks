import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import thunk, { ThunkMiddleware } from 'redux-thunk'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk] as [ThunkMiddleware],
})

export type IState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
