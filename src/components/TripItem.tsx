import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Card,
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
      <Card>
        <CardBody>
          <Image src={trip.mainImage} />
          <Heading size='md'>
            {trip.idx}. {trip.name}
          </Heading>
          <Text>{trip.price}원</Text>
          <Text>{trip.spaceCategory}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button
              onClick={() => {
                reservation()
              }}
            >
              예약
            </Button>
            <Button
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
