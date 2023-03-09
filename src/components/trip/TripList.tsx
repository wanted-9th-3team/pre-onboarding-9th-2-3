import { useSelector } from 'react-redux'
import { searchedTripLists } from '../../store/trip/tripSelector'

function TripList() {
  const searchedTripList = useSelector(searchedTripLists)

  return <div />
}

export default TripList
