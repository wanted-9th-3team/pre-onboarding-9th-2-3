import React from 'react'
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  CardHeader,
  CardFooter,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { changeCount } from '../store/reducers/reservation'
import { TripDto } from '../dtos/TripDto'

export interface IReservationItemProps {
  tripItem: TripDto
  count: number
}

function ReservationItem(props: IReservationItemProps) {
  const { tripItem, count } = props
  const dispatch = useDispatch()
  const changeOtherCount = (e: string) => {
    const newCount = parseInt(e, 10)
    if (newCount <= tripItem.maximumPurchases) {
      dispatch(changeCount({ idx: tripItem.idx, count: newCount }))
    }
  }
  return (
    <GridItem w='100%'>
      <Card>
        <CardHeader p='1'>
          <Heading size='xs' colorScheme='gray'>
            {tripItem.idx}.
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody p='3' minH='300'>
          <Image src={tripItem.mainImage} mb='3' />
          <Heading size='sm' minH='50'>
            {tripItem.name}
          </Heading>
          <Text>{tripItem.price}원</Text>
          <Text>{tripItem.spaceCategory}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <NumberInput
            defaultValue={count}
            min={0}
            max={tripItem.maximumPurchases}
            onChange={e => {
              changeOtherCount(e)
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </CardFooter>
      </Card>
    </GridItem>
  )
}

export default ReservationItem
