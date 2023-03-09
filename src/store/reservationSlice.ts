import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeProduct } from '../type'

const initialState: { allReservations: TypeProduct[] } = {
  allReservations: [],
}

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    putReservationsData(state, action: PayloadAction<TypeProduct[]>) {
      state.allReservations = action.payload
    },

    increase(state, action: PayloadAction<number>) {
      const selected = state.allReservations.find(
        item => item.idx === action.payload
      )
      selected!.quantity!++
    },

    decrease(state, action: PayloadAction<number>) {
      const selected = state.allReservations.find(
        item => item.idx === action.payload
      )

      if (selected?.quantity! > 1) {
        selected!.quantity!--
      }
    },
  },
})

export const reservationActions = reservationSlice.actions

export default reservationSlice.reducer
