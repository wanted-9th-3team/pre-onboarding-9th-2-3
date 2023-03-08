import React from 'react'
import { Card, GridItem } from '@chakra-ui/react'

function ReservationItem() {
  return (
    <GridItem w='100%'>
      <Card>
        hello
        {/* <CardBody>
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
            <Button onClick={()=>{reservation()}}>예약</Button>
            <Button onClick={()=>{onOpenModal(props.idx)}}>상세 정보</Button>
          </ButtonGroup>
        </CardFooter> */}
      </Card>
    </GridItem>
  )
}

export default ReservationItem
