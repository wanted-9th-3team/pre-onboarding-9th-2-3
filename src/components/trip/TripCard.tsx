import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ITravelInfo from '../../api/TravelDTO'
import { addCartList, selectCartItems } from '../../store/cart/cartSlice'
import { useAppDispatch } from '../../store/store'
import { getTravelList } from '../../store/travel/travelSlice'
import CardModal from '../modal/CardModal'

interface ITripCardProps {
  travelInfo: ITravelInfo
}

function TripCard({ travelInfo }: ITripCardProps) {
  const { idx, name, mainImage, price, spaceCategory } = travelInfo
  const selectedCartItem = useSelector(selectCartItems)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const dispatch = useAppDispatch()

  const openModalHandler = () => {
    dispatch(getTravelList(idx))
    onOpen()
  }

  const addToCartHandler = () => {
    if (selectedCartItem.find(item => item.idx === idx)) {
      toast({
        title: '오류',
        description: '이미 장바구니에 존재합니다.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
      return
    }

    dispatch(addCartList(travelInfo))
  }

  return (
    <>
      <CardModal isOpen={isOpen} onClose={onClose} idx={idx} />
      <Card
        direction={{ base: 'row' }}
        overflow='hidden'
        variant='outline'
        width='480px'
        height='120px'
        justify='space-between'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '100px' }}
          align='center'
          src={mainImage}
          alt={name}
          borderRadius='lg'
        />

        <CardBody>
          <Text size='sm' fontSize='14px' fontWeight='bold'>
            <Badge colorScheme='green' mr='2'>
              {idx}
            </Badge>
            {name}
          </Text>
          <Stack direction='row' justify='center' align='center'>
            <Text py='2'>위치 : {spaceCategory}</Text>
            <Text color='blue.600' fontSize='md'>
              ${price}
            </Text>
          </Stack>
          <ButtonGroup spacing='2' size='xs'>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={addToCartHandler}
            >
              예약하기
            </Button>
            <Button
              variant='solid'
              colorScheme='teal'
              onClick={openModalHandler}
            >
              상세정보
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </>
  )
}

export default TripCard
