import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeFilter } from '../type'

const initialState: {
  filter: TypeFilter | undefined
} = {
  filter: undefined,
}

const filterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    insertFilter(state, action: PayloadAction<TypeFilter>) {
      state.filter = action.payload
    },
    removeFilter(state) {
      state.filter = undefined
    },
  },
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer
