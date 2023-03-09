import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ITravelState } from './tripSlice'

const selectCartReducer = (state: RootState): ITravelState => state.trip

export const selectTripLists = createSelector(
  [selectCartReducer],
  trip => trip.tripList
)

export const selectSelectedTripList = createSelector(
  [selectCartReducer],
  trip => trip.selectedtripList
)
