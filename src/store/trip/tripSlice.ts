import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITripInfo } from '../../Type'
import getTravelInfo from '../../api/travelApi'

export interface ITravelState {
  readonly tripList: ITripInfo[]
  readonly priceRange: number[]
  readonly selectedtripList: ITripInfo | null
}

const initialState: ITravelState = {
  tripList: [],
  priceRange: [],
  selectedtripList: null,
}

export const getTrip = createAsyncThunk('trip/getTripStatus', async () => {
  const response = await getTravelInfo()
  if (!response) return []
  return response
})

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setSelectedtripList: (state, action: PayloadAction<number>) => {
      const [selectedList] = state.tripList.filter(
        list => list.idx === action.payload
      )
      state.selectedtripList = selectedList
    },
    initTrip: state => {
      state.tripList = []
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getTrip.fulfilled,
      (state, action: PayloadAction<ITripInfo[]>) => {
        const { payload } = action
        const maxPrice = Math.max(...payload.map(trip => trip.price))
        state.tripList = action.payload
        state.priceRange = [0, maxPrice]
      }
    )
  },
})

export const { setSelectedtripList } = tripSlice.actions

export default tripSlice.reducer
