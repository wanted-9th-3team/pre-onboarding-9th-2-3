import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearchCategory, ITravelInfo } from '../../Type'

export interface TravelState {
  readonly travelList: ITravelInfo[]
  readonly searchCategory: ISearchCategory
  readonly selectedtravelList: ITravelInfo | null
  readonly loading: boolean
  readonly error: string
}

const initialState: TravelState = {
  travelList: [],
  searchCategory: { priceRange: [0, 30000], selectSpace: [] },
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
    setSearchCategory: (state, action: PayloadAction<ISearchCategory>) => {
      state.searchCategory = action.payload
    },
    initTravel: state => {
      state.travelList = []
    },
  },
})

export const { setTravelLists, getTravelList, setSearchCategory } =
  travelSlice.actions
export default travelSlice.reducer
