import { configureStore } from '@reduxjs/toolkit'
import trip from './reducers/trip'
import modal from './reducers/modal'
import reservation from './reducers/reservation'

export const store = configureStore({
  reducer: {
    trip,
    modal,
    reservation,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
