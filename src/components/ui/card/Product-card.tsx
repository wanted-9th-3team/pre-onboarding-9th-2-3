import { Box, Button, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../../store/modal-slice'
import { TypeProduct } from '../../../type'
import { reservationActions } from '../../../store/reservation-slice'
import { RootState } from '../../../store'

function CardProduct(props: { product: TypeProduct }) {
  const { product } = props
  const reservationInfos = useSelector(
    (state: RootState) => state.reservationSlice.reservationInfos
  )

  const dispatch = useDispatch()

  const setModal = () => {
    dispatch(modalActions.insertModal(product))
  }

  const insertReservation = () => {
    const isExist = reservationInfos.find(item => item.idx === product.idx)

    if (!isExist) {
      dispatch(reservationActions.insertReservation(product))
    }
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
      onClick={setModal}
    >
      <Box backgroundColor='beige' width='100%'>
        <Text> {product.idx}</Text>
        <Text fontSize='xl' as='b'>
          {product.name}
        </Text>
        <Text>{product.price}</Text>
        <Text>{product.spaceCategory}</Text>
        <Box>
          <Button type='button' onClick={insertReservation}>
            예약
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default CardProduct
