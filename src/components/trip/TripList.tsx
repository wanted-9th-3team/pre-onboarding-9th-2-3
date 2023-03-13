import { useSelector } from 'react-redux'
import { searchedTripLists } from '../../store/trip/tripSelector'
import TripCard from './TripCard'

function TripList() {
  const searchedTripList = useSelector(searchedTripLists)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {searchedTripList.map(travel => {
        return <TripCard key={travel.idx} travelInfo={travel} />
      })}
    </div>
  )
}

export default TripList
