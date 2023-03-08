import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { TypeProduct } from '../../type'

function ReservationCalc() {
  const [totalPriace, setTotalPrice] = useState<number>()

  const reservationInfoInStorage: TypeProduct[] = JSON.parse(
    localStorage.getItem('reservations')!
  )

  useEffect(() => {
    setTotalPrice(
      reservationInfoInStorage.reduce((acc, cur) => acc + cur.price, 0)
    )
  }, [])
  return (
    <Box>
      <Text>총가격 : {totalPriace}</Text>
    </Box>
  )
}

export default ReservationCalc
