import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ITravelInfo from '../../api/TravelDTO'
import { RootState } from '../store'

interface TravelState {
  readonly travelList: ITravelInfo[]
  readonly searchCategory: {
    priceRange: number[]
    selectSpace: string[]
  }
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
    setSearchCategory: (
      state,
      action: PayloadAction<{
        priceRange: number[]
        selectSpace: string[]
      }>
    ) => {
      state.searchCategory = action.payload
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
export const searchedTripLists = createSelector([selectCartReducer], travel => {
  const { searchCategory, travelList } = travel
  const { priceRange, selectSpace } = searchCategory
  const spacesortedTripList = travelList.filter(trip => {
    return selectSpace.length ? selectSpace.includes(trip.spaceCategory) : trip
  })

  return spacesortedTripList.filter(
    list => list.price >= priceRange[0] && list.price <= priceRange[1]
  )
})

export const { setTravelLists, getTravelList, setSearchCategory } =
  travelSlice.actions
export default travelSlice.reducer
