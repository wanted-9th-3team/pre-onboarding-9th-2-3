import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import ITravelInfo from '../../api/TravelDTO'

export type TCartItem = ITravelInfo & {
  quantity: number
}

interface CartState {
  readonly isCartOpen: boolean
  readonly cartItems: TCartItem[]
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
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
      state.cartItems = newCartItems
    },
    removeCartList: (state, action: PayloadAction<ITravelInfo>) => {
      const newCartItems = RemoveCartItem(state.cartItems, action.payload)
      state.cartItems = newCartItems
    },
    clearCartItem: (state, action: PayloadAction<number>) => {
      const newCartItems = state.cartItems.filter(
        items => items.idx !== action.payload
      )
      state.cartItems = newCartItems
    },
    initCartItem: state => {
      state.cartItems = []
      state.isCartOpen = false
    },
  },
})

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
)
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
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

export const { initCartItem, addCartList, removeCartList, clearCartItem } =
  cartSlice.actions
export default cartSlice.reducer
