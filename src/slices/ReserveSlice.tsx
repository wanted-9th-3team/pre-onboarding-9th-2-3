import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'

const ReserveSlice = createSlice({
  name: 'reserve',
  initialState: {
    reserve: [],
  },
  reducers: {
    addReserve: (state, action) => {
      state.reserve.push(action.payload)
    },
  },
})

export const { addReserve } = ReserveSlice.actions

export default ReserveSlice.reducer
