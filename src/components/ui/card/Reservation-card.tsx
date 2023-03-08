import { Box, Button, Text } from '@chakra-ui/react'
import { TypeProduct } from '../../../type'

function CardReservation(props: { product: TypeProduct }) {
  const { product } = props

  const cancelReservationHandler = () => {
    const reservationInfoInStorage: TypeProduct[] = JSON.parse(
      localStorage.getItem('reservations')!
    )

    const filterReservationInfo = reservationInfoInStorage.filter(
      item => item.idx !== product.idx
    )

    localStorage.setItem('reservations', JSON.stringify(filterReservationInfo))
    location.reload()
  }

  return (
    <Box
      backgroundImage={`url(${product.mainImage})`}
      backgroundPosition='center'
      backgroundSize='inherit'
      backgroundRepeat='no-repeat'
      width='15rem'
      height='23rem'
      display='flex'
      alignItems='flex-end'
      margin={3}
    >
      <Box backgroundColor='beige' width='100%'>
        <Text> {product.idx}</Text>
        <Text fontSize='xl' as='b'>
          {product.name}
        </Text>
        <Text>{product.price}</Text>
        <Text>{product.spaceCategory}</Text>
        <Box>
          <Button type='button' onClick={cancelReservationHandler}>
            예약취소
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default CardReservation
