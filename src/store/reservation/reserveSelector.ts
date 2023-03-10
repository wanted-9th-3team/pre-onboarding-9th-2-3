import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ICartState } from './reserveSlice'

const selectReservationReducer = (state: RootState): ICartState =>
  state.reservation

export const selectCartItems = createSelector(
  [selectReservationReducer],
  reservation => reservation.cartItems
)

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
)

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)
