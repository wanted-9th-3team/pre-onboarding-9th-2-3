import { useDispatch } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tripReducer from './trip/tripSlice'
import cartReducer from './cart/cartSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  trip: tripReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
