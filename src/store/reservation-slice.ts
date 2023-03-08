import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeProduct } from '../type'

const initialState: { reservationInfos: TypeProduct[] } = {
  reservationInfos: [],
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    insertReservation(state, action: PayloadAction<TypeProduct>) {
      state.reservationInfos = [...state.reservationInfos, action.payload]
    },
    resetReservation(state) {
      state.reservationInfos = []
    },
  },
})

export const reservationActions = reservationSlice.actions

export default reservationSlice.reducer
