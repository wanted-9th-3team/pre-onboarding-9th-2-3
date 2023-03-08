import React from 'react'
import { useSelector } from 'react-redux'
import { searchedTripLists } from '../../store/travel/travelSlice'
import TripCard from './TrripCard'

function TripList() {
  const travelLists = useSelector(searchedTripLists)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {travelLists.map(travel => {
        return <TripCard key={travel.idx} travelInfo={travel} />
      })}
    </div>
  )
}

export default TripList
