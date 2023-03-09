import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITravelInfo } from '../../Type'

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
    initCartItem: state => {
      state.cartItems = []
      localStorage.removeItem('cart')
    },
    clearCartItem: (state, action: PayloadAction<number>) => {
      const newCartItems = state.cartItems.filter(
        items => items.idx !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(newCartItems))
      state.cartItems = newCartItems
    },
  },
})

export const { addCartList, removeCartList, initCartItem, clearCartItem } =
  cartSlice.actions
export default cartSlice.reducer
