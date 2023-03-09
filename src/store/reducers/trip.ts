import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TripData from '../../data/mock_data.json'
import { loadTrip } from '../../apis/tripApi'
import { TripDto } from '../../dtos/TripDto'

export const getTrip = createAsyncThunk(
  'trip/getTripStatus',
  async()=>{
    const response : any = await loadTrip()
    return response.data
  }
)

interface TripState {
  tripItems: TripDto[],
  filteredTripItems:TripDto [],
}

const initialState : TripState = {
  tripItems: [],
  filteredTripItems: []
}
export const tripSlice = createSlice({
  name: 'trip',
  initialState,
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
  extraReducers: (builder) =>{
    builder.addCase(getTrip.fulfilled, (state, action)=>{
      state.tripItems = action.payload
      state.filteredTripItems = action.payload
    })
  }
  
})

export const { resetTrip, filterTrip } = tripSlice.actions

export default tripSlice.reducer
