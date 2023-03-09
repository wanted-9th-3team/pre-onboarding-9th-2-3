import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productSlice'
import modalSlice from './modalSlice'
import filterSlice from './filterSlice'
import reservationSlice from './reservationSlice'

export const store = configureStore({
  reducer: { productsSlice, modalSlice, filterSlice, reservationSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
