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
import { ITripInfo } from '../../Type'
// import { addCartList } from '../../store/cart/cartSlice'
import { useAppDispatch } from '../../store/store'
import { setSelectedtripList } from '../../store/trip/tripSlice'
import CardModal from '../modal/CardModal'
// import { selectCartItems } from '../../store/cart/cartSelector'

interface ITripCardProps {
  travelInfo: ITripInfo
}

function TripCard({ travelInfo }: ITripCardProps) {
  const { idx, name, mainImage, price, spaceCategory } = travelInfo
  // const selectedCartItem = useSelector(selectCartItems)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const dispatch = useAppDispatch()

  const openModalHandler = () => {
    dispatch(setSelectedtripList(idx))
    onOpen()
  }

  // const addToCartHandler = () => {
  //   if (selectedCartItem.find(item => item.idx === idx)) {
  //     toast({
  //       title: '오류',
  //       description: '이미 장바구니에 존재합니다.',
  //       status: 'warning',
  //       duration: 2000,
  //       isClosable: true,
  //       position: 'top',
  //     })
  //   } else {
  //     toast({
  //       title: '예약 완료',
  //       description: '장바구니에 추가했습니다.',
  //       status: 'info',
  //       duration: 500,
  //       isClosable: true,
  //       position: 'top',
  //     })
  //     dispatch(addCartList(travelInfo))
  //   }
  // }
  return <div />
}

export default TripCard
