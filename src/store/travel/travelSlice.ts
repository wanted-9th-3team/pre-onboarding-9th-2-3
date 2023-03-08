import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ITravelInfo from '../../api/TravelDTO'
import { RootState } from '../store'

interface TravelState {
  readonly travelList: ITravelInfo[]
  readonly searchPrice: string[]
  readonly searchSpaceCategory: string
  readonly selectedtravelList: ITravelInfo | null
  readonly loading: boolean
  readonly error: string
}

const initialState: TravelState = {
  travelList: [],
  searchPrice: ['0', '3000'],
  searchSpaceCategory: '전체',
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
    setSearchPrice: (state, action: PayloadAction<string[]>) => {
      state.searchPrice = action.payload
    },
    setSearchSpaceCategory: (state, action: PayloadAction<string>) => {
      state.searchSpaceCategory = action.payload
    },
    initTravel: state => {
      state.travelList = []
    },
  },
})
const selectCartReducer = (state: RootState): TravelState => state.travel
export const selectTravelLists = createSelector(
  [selectCartReducer],
  travel => travel.travelList
)
export const searchTravelSpaceLists = createSelector(
  [selectTravelLists],
  travels => {
    const spaceList = travels.map(travel => travel.spaceCategory)
    return new Array(...new Set(spaceList))
  }
)

export const { setTravelLists, getTravelList } = travelSlice.actions
export default travelSlice.reducer
