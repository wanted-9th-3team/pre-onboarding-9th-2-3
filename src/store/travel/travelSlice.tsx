import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ITravelInfo from '../../api/TravelDTO'

interface TravelState {
  travelList: ITravelInfo[]
  selectedtravelList: ITravelInfo | null
  loading: boolean
  error: string
}

const initialState: TravelState = {
  travelList: [],
  selectedtravelList: null,
  loading: false,
  error: '',
}

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    setTravelLists: (state, action: PayloadAction<ITravelInfo[]>) => {
      state.travelList = action.payload
    },
    getTravelList: (state, action: PayloadAction<number>) => {
      const [selectedList] = state.travelList.filter(
        list => list.idx === action.payload
      )
      state.selectedtravelList = selectedList
    },
    initTravel: state => {
      state = initialState
    },
  },
})

export const { setTravelLists, getTravelList } = travelSlice.actions
export default travelSlice.reducer
