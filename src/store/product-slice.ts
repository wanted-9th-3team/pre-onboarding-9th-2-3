import { createSlice } from '@reduxjs/toolkit'
import { mockData } from '../data/mock_data'

const initialState = {
  allProducts: mockData,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const productsActions = productsSlice.actions

export default productsSlice.reducer
