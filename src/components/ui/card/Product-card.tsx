import { Box, Button, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../../store/modal-slice'
import { TypeProduct } from '../../../type'

function CardProduct(props: { product: TypeProduct }) {
  const { product } = props
  const reservationInfoInStorage: TypeProduct[] = JSON.parse(
    localStorage.getItem('reservations')!
  )

  const dispatch = useDispatch()

  const setModal = () => {
    dispatch(modalActions.insertModal(product))
  }

  const insertReservation = () => {
    const isExist = reservationInfoInStorage.find(
      item => item.idx === product.idx
    )

    if (!isExist) {
      localStorage.setItem(
        'reservations',
        JSON.stringify([...reservationInfoInStorage, product])
      )
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
