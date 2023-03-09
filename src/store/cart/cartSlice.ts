import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITravelInfo } from '../../Type'

export type TCartItem = ITravelInfo & {
  quantity: number
}

export interface CartState {
  readonly cartItems: TCartItem[]
}

const existCart = localStorage.getItem('cart')

const initialState: CartState = {
  cartItems: existCart ? JSON.parse(existCart) : [],
}

const addCartItem = (
  cartItems: TCartItem[],
  productToAdd: ITravelInfo
): TCartItem[] => {
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
  cartItems: TCartItem[],
  cartItemToRemove: ITravelInfo
): TCartItem[] => {
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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartList: (state, action: PayloadAction<ITravelInfo>) => {
      const newCartItems = addCartItem(state.cartItems, action.payload)
      localStorage.setItem('cart', JSON.stringify(newCartItems))
      state.cartItems = newCartItems
    },
    removeCartList: (state, action: PayloadAction<ITravelInfo>) => {
      const newCartItems = RemoveCartItem(state.cartItems, action.payload)
      localStorage.setItem('cart', JSON.stringify(newCartItems))

      state.cartItems = newCartItems
    },
    clearCartItem: (state, action: PayloadAction<number>) => {
      const newCartItems = state.cartItems.filter(
        items => items.idx !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(newCartItems))
      state.cartItems = newCartItems
    },
    initCartItem: state => {
      state.cartItems = []
      localStorage.removeItem('cart')
    },
  },
})

export const { initCartItem, addCartList, removeCartList, clearCartItem } =
  cartSlice.actions
export default cartSlice.reducer
