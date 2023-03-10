import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITripInfo } from '../../Type'

export type TReservationItem = ITripInfo & {
  quantity: number
}

export interface ICartState {
  readonly cartItems: TReservationItem[]
}

const existCart = localStorage.getItem('reservation')

const initialState: ICartState = {
  cartItems: existCart ? JSON.parse(existCart) : [],
}

const addCartItem = (
  cartItems: TReservationItem[],
  productToAdd: ITripInfo
): TReservationItem[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.idx === productToAdd.idx
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.idx === productToAdd.idx
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const RemoveCartItem = (
  cartItems: TReservationItem[],
  cartItemToRemove: ITripInfo
): TReservationItem[] => {
  const existingCartItem = cartItems.find(
    item => item.idx === cartItemToRemove.idx
  )

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.idx !== cartItemToRemove.idx)
  }

  return cartItems.map(cartItem =>
    cartItem.idx === cartItemToRemove.idx
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addCartList: (state, action: PayloadAction<ITripInfo>) => {
      const newCartItems = addCartItem(state.cartItems, action.payload)
      localStorage.setItem('reservation', JSON.stringify(newCartItems))
      state.cartItems = newCartItems
    },
    removeCartList: (state, action: PayloadAction<ITripInfo>) => {
      const newCartItems = RemoveCartItem(state.cartItems, action.payload)
      localStorage.setItem('reservation', JSON.stringify(newCartItems))

      state.cartItems = newCartItems
    },
    initCartItem: state => {
      state.cartItems = []
      localStorage.removeItem('reservation')
    },
    clearCartItem: (state, action: PayloadAction<number>) => {
      const newCartItems = state.cartItems.filter(
        items => items.idx !== action.payload
      )
      localStorage.setItem('reservation', JSON.stringify(newCartItems))
      state.cartItems = newCartItems
    },
  },
})

export const { addCartList, removeCartList, initCartItem, clearCartItem } =
  reservationSlice.actions
export default reservationSlice.reducer
