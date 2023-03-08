import { Box } from '@chakra-ui/react'
import CardReservation from '../ui/card/Reservation-card'
import { TypeProduct } from '../../type'

function ReservationInfo() {
  const reservationInfoInStorage: TypeProduct[] = JSON.parse(
    localStorage.getItem('reservations')!
  )

  let reservationJSX = reservationInfoInStorage.map(item => (
    <CardReservation key={item.idx} product={item} />
  ))

  return (
    <Box
      className='reservation__lists'
      display='flex'
      alignItems='center'
      flexWrap='wrap'
    >
      {reservationJSX}
    </Box>
  )
}

export default ReservationInfo
