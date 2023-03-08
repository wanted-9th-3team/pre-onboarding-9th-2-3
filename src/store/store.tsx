import { configureStore } from '@reduxjs/toolkit'
import reservations from './slice/reservationSlice'

export const store = configureStore({
  reducer: { reservations },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
