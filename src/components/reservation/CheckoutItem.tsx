import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react'
import {
  addReservationList,
  clearReservationItem,
  removeReservationList,
  TReservationItem,
} from '../../store/reservation/reservationSlice'

import { useAppDispatch } from '../../store/store'

interface CheckoutItemProps {
  items: TReservationItem
}

function CheckoutItem({ items }: CheckoutItemProps) {
  const dispatch = useAppDispatch()
  const {
    mainImage,
    price,
    idx,
    name,
    spaceCategory,
    quantity,
    maximumPurchases,
  } = items
  const isPurchase = maximumPurchases <= quantity

  return (
    <Card
      direction={{ base: 'row' }}
      overflow='hidden'
      variant='outline'
      width='400px'
      height='100px'
      justify='space-between'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '100px' }}
        borderRadius='lg'
        align='center'
        src={mainImage}
        alt={name}
      />
      <CardBody>
        <Box mb='10px'>
          <Text fontSize='12px' fontWeight='bold'>
            ({spaceCategory}) {name}
          </Text>
        </Box>
        <Box display='flex' justifyContent='space-around'>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
          >
            <Button
              size='xs'
              onClick={() => dispatch(removeReservationList(items))}
            >
              &#10094;
            </Button>
            <Text width='50px'>{quantity}</Text>
            <Button
              size='xs'
              onClick={() => dispatch(addReservationList(items))}
              isDisabled={isPurchase}
            >
              &#10095;
            </Button>
          </Box>
          <Text className='price'>$ {price * quantity}</Text>
        </Box>
      </CardBody>
      <Button
        size='xs'
        colorScheme='red'
        onClick={() => dispatch(clearReservationItem(idx))}
      >
        &#10005;
      </Button>
    </Card>
  )
}

export default CheckoutItem
