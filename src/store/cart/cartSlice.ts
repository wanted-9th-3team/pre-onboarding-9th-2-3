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
  },
})

export const { addCartList } = cartSlice.actions
export default cartSlice.reducer
