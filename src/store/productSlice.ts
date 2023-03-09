import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeProduct } from '../type'

const initialState: { allProducts: TypeProduct[] } = {
  allProducts: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    putProductsData(state, action: PayloadAction<TypeProduct[]>) {
      state.allProducts = action.payload
    },
  },
})

export const productsActions = productsSlice.actions

export default productsSlice.reducer
