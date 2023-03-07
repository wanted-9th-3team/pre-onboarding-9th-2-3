import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './product-slice'
import modalSlice from './modal-slice'

export const store = configureStore({ reducer: { productsSlice, modalSlice } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
