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
import { useAppDispatch } from '../../store/store'

interface ITripCardProps {
  travelInfo: ITripInfo
}

function TripCard({ travelInfo }: ITripCardProps) {
  const { idx, name, mainImage, price, spaceCategory } = travelInfo
  // const selectedCartItem = useSelector(selectCartItems)
  const toast = useToast()
  const dispatch = useAppDispatch()
  return <div />
}

export default TripCard
