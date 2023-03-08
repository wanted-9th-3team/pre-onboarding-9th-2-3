import { createSlice } from '@reduxjs/toolkit'
import TripData from '../../data/mock_data.json'

export const tripSlice = createSlice({
  name: 'trip',
  initialState: {
    tripItems: TripData,
    filteredTripItems: TripData,
  },
  reducers: {
    resetTrip: state => {
      state.filteredTripItems = TripData
    },
    filterTrip: (state, action) => {
      state.filteredTripItems = state.tripItems.filter(tripItem => {
        if (action.payload.city === '전체')
          return (
            tripItem.price <= action.payload.max &&
            tripItem.price >= action.payload.min
          )
        return (
          tripItem.spaceCategory === action.payload.city &&
          tripItem.price <= action.payload.max &&
          tripItem.price >= action.payload.min
        )
      })
    },
  },
})

export const { resetTrip, filterTrip } = tripSlice.actions

export default tripSlice.reducer
