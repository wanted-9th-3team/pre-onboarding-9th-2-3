import { createSlice } from '@reduxjs/toolkit'
import TripData from '../../data/mock_data.json'

export const tripSlice = createSlice({
  name: 'trip',
  initialState: { tripItems: TripData },
  reducers: {
    getTrip: (state, action) => {
      //   state.tripItems = action.payload
    },
  },
})

export const { getTrip } = tripSlice.actions

export default tripSlice.reducer
