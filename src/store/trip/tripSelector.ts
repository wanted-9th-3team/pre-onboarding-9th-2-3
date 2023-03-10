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

export const selectPriceRange = createSelector(
  [selectCartReducer],
  trip => trip.priceRange
)

export const searchTravelSpaceLists = createSelector(
  [selectCartReducer],
  trips => {
    const spaceList = trips.tripList.map(trip => trip.spaceCategory)
    return [...new Set(spaceList)]
  }
)

export const searchedTripLists = createSelector([selectCartReducer], trips => {
  const { searchCategory, tripList } = trips
  const { priceRange, selectSpace } = searchCategory

  const spacesortedTripList = tripList.filter(trip => {
    return selectSpace.length ? selectSpace.includes(trip.spaceCategory) : trip
  })

  return spacesortedTripList.filter(
    list => list.price >= priceRange[0] && list.price <= priceRange[1]
  )
})
