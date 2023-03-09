import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@chakra-ui/react'
import { RootState } from '../store/store'
import ReservationItem from '../components/ReservationItem'
import NavHeader from '../components/NavHeader'

function Reservations() {
  const reservationList = useSelector(
    (state: RootState) => state.reservation.reservations
  )
  const tripItems = useSelector((state: RootState) => state.trip.tripItems)

  const ReservationItems = reservationList.map(item => {
    const nowTripItem = tripItems.find(tripItem => tripItem.idx === item.idx)
    if (nowTripItem) {
      return (
        <ReservationItem
          key={item.idx}
          tripItem={nowTripItem}
          count={item.count}
        />
      )
    }
    return null
  })

  const getTotalPrice = () => {
    let calculateTotal = 0
    reservationList.forEach(item => {
      const nowTripItem = tripItems.find(tripItem => tripItem.idx === item.idx)
      if (nowTripItem) {
        calculateTotal += nowTripItem.price * item.count
      }
    })
    return calculateTotal
  }

  return (
    <div>
      <NavHeader />
      <Grid gap={6} templateColumns='repeat(4, 1fr)' mt='5'>
        {ReservationItems}
      </Grid>
      <span>총 가격 : {getTotalPrice()}</span>
    </div>
  )
}

export default Reservations
