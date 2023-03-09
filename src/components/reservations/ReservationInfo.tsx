import { Box } from '@chakra-ui/react'
import CardReservation from '../ui/card/ReservationCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function ReservationInfo() {
  const reservationsData = useSelector(
    (state: RootState) => state.reservationSlice.allReservations
  )

  const reservationJSX = reservationsData.map(item => (
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
