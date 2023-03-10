import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IReservationState } from './reservationSlice'

const selectReservationReducer = (state: RootState): IReservationState =>
  state.reservation

export const selectReservationItems = createSelector(
  [selectReservationReducer],
  reservation => reservation.reservationItems
)

export const selectReservationTotal = createSelector(
  [selectReservationItems],
  reservationItems =>
    reservationItems.reduce(
      (total, reservationItem) =>
        total + reservationItem.quantity * reservationItem.price,
      0
    )
)

export const selectReservationCount = createSelector(
  [selectReservationItems],
  reservationItems =>
    reservationItems.reduce(
      (total, reservationItem) => total + reservationItem.quantity,
      0
    )
)
