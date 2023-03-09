import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ICartState } from './cartSlice'

const selectCartReducer = (state: RootState): ICartState => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
)
