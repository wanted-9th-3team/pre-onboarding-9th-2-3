import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Heading } from '@chakra-ui/react'
import { RootState } from '../store/store'
import ReservationItem from '../components/ReservationItem'

function Reservations() {
  const reservationList = useSelector(
    (state: RootState) => state.reservation.reservations
  )
  const [totalPrice, setTotalPrice] = useState(0)

  const reservationItems = reservationList.map(item => (
    <ReservationItem key={item.idx} />
  ))

  return (
    <div>
      <Heading>장바구니</Heading>
      {reservationItems}
    </div>
  )
}

export default Reservations
