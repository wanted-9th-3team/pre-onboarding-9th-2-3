import React from 'react'
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
} from '@chakra-ui/react'
import { TripDto } from '../dtos/TripDto'

function TripItem(props: { trip: TripDto }) {
  const { trip } = props
  return (
    <Card>
      <CardHeader>
        <Heading as='h1' size='md'>
          {trip.idx}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image src={trip.mainImage} />
        <Heading size='md'>{trip.name}</Heading>
        <Text>{trip.price}</Text>
        <Text>{trip.spaceCategory}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button>예약</Button>
          <Button>상세 정보</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default TripItem
