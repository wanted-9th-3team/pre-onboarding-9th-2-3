import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
  GridItem,
} from '@chakra-ui/react'
import { openModal } from '../store/reducers/modal'
import { addReservation } from '../store/reducers/reservation'
import { RootState } from '../store/store'
import { TripDto } from '../dtos/TripDto'

function TripItem(props: { idx: number }) {
  const { idx } = props
  const dispatch = useDispatch()
  const trip: TripDto = useSelector(
    (state: RootState) => state.trip.filteredTripItems[idx]
  )

  const reservation: any = () => {
    dispatch(
      addReservation({
        idx: trip.idx,
      })
    )
  }

  const onOpenModal: any = (i: number) => {
    dispatch(openModal(i))
  }

  return (
    <GridItem w='100%'>
      <Card p='3' minH='500'>
        <CardHeader p='1'>
          <Heading size='xs' colorScheme='gray' m='2'>
            {trip.idx}.
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody p='3'>
          <Image src={trip.mainImage} mb='3' />
          <Heading size='sm' minH='50'>
            {trip.name}
          </Heading>
          <Text>{trip.price}원</Text>
          <Text>{trip.spaceCategory}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup w='100%'>
            <Button
              w='50%'
              colorScheme='orange'
              onClick={() => {
                reservation()
              }}
            >
              예약
            </Button>
            <Button
              w='50%'
              colorScheme='facebook'
              onClick={() => {
                onOpenModal(idx)
              }}
            >
              상세 정보
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  )
}

export default TripItem
