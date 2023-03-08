import { useDispatch } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import travelReducer from './travel/travelSlice'
import cartReducer from './cart/cartSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  travel: travelReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
