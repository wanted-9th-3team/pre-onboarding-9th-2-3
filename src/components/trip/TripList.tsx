import React from 'react'
import { useSelector } from 'react-redux'
import { selectTravelLists } from '../../store/travel/travelSlice'
import TripCard from './TrripCard'

function TripList() {
  const travelLists = useSelector(selectTravelLists)

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