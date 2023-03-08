import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './product-slice'
import modalSlice from './modal-slice'
import filterSlice from './filter-slice'

export const store = configureStore({
  reducer: { productsSlice, modalSlice, filterSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
