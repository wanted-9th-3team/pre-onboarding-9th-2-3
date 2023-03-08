import { createSlice } from '@reduxjs/toolkit'
import { ReservationDto } from '../../dtos/TripDto'

interface ReservationState {
  reservations: ReservationDto[]
}

const initialState: ReservationState = {
  reservations: [],
}
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      const foundReservation = state.reservations.find(
        reservation => reservation.idx === action.payload.idx
      )
      if (foundReservation) {
        const toAdd: ReservationDto = {
          idx: action.payload.idx,
          count: foundReservation.count + 1,
        }
        state.reservations = state.reservations.filter(
          reservation => reservation.idx !== action.payload.idx
        )
        state.reservations = [toAdd, ...state.reservations]
      } else {
        const toAdd: ReservationDto = {
          idx: action.payload.idx,
          count: 1,
        }
        state.reservations = [toAdd, ...state.reservations]
      }
    },
    changeCount: (state, action) => {
      if (action.payload.count === 0) {
        state.reservations = state.reservations.filter(
          reservation => reservation.idx !== action.payload.idx
        )
      } else {
        const foundReservationIdx = state.reservations.findIndex(
          reservation => reservation.idx === action.payload.idx
        )
        const copiedReservations = [...state.reservations]
        copiedReservations[foundReservationIdx] = {
          idx: copiedReservations[foundReservationIdx].idx,
          count: action.payload.count,
        }
        state.reservations = copiedReservations
      }
    },
  },
})

export const { addReservation } = reservationSlice.actions

export default reservationSlice.reducer
