import {
  Card,
  Stack,
  Heading,
  Divider,
  Image,
  ButtonGroup,
  Button,
  CardBody,
  Text,
  CardFooter,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addReserve } from '../slices/ReserveSlice'

function TourItem({ item }) {
  const dispatch = useDispatch()
  const reserveList = useSelector((state) => state.reserve.reserve);

  const reserve = (e) => {
    const itemIdx = e.target.dataset.idx
    if (reserveList.includes(item)) {
        alert('이미 예약하신 상품입니다.')
    } else {
      dispatch(addReserve(item))
      alert("상품이 예약되었습니다.")
    }
  }

  return (
    item && (
      <Card maxW='sm'>
        <CardBody>
          <Image src={item.mainImage} alt={item.name} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{`${item.idx}.${item.name}`}</Heading>
            <Text>{item.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              {item.price.toLocaleString()}원
            </Text>
            <Text>{item.spaceCategory}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' />
            <Button
              variant='ghost'
              colorScheme='blue'
              data-idx={item.idx}
              onClick={reserve}
            >
              예약하기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    )
  )
}

export default TourItem
