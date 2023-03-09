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
  return <div />
}

export default TripCard
