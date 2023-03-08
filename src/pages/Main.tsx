import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '@chakra-ui/react'
import { RootState } from '../store/store'
import { TripDto } from '../dtos/TripDto'
import TripItem from '../components/TripItem'

function Main() {
  const tripItems = useSelector((state: RootState) => state.trip.tripItems)

  const Trip = tripItems.map(item => <TripItem trip={item} key={item.idx} />)

  return (
    <div>
      <h1>상품 목록</h1>
      {Trip}
    </div>
  )
}

export default Main
