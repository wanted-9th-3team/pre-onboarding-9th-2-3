import React from 'react'
import { useSelector } from 'react-redux'
import { Heading } from '@chakra-ui/react'
import { RootState } from '../store/store'
import ReservationItem from '../components/ReservationItem'

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
      <Heading>장바구니</Heading>
      <div>{ReservationItems}</div>
      <span>총 가격 : {getTotalPrice()}</span>
    </div>
  )
}

export default Reservations
