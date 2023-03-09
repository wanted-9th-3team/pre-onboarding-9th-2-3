import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TravelState } from './tripSlice'

const selectCartReducer = (state: RootState): TravelState => state.trip
export const selectTravelLists = createSelector(
  [selectCartReducer],
  travel => travel.travelList
)
export const searchTravelSpaceLists = createSelector(
  [selectTravelLists],
  travels => {
    const spaceList = travels.map(trip => trip.spaceCategory)
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
