import { configureStore } from '@reduxjs/toolkit'
import trip from './reducers/trip'

export const store = configureStore({
  reducer: {
    trip,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
