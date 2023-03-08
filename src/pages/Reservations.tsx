import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Card,
  Box,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { RootState } from '../store/store'
import { remove, patch } from '../store/slice/reservationSlice'

function Reservation() {
  const dispatch = useDispatch()
  const todolist = useSelector((state: RootState) => state.reservations)
  const [pay, setPay] = useState(0)

  const payHandler = (id: number, amount: number) => {
    const patchData = {
      id,
      amount,
    }
    dispatch(patch(patchData))
  }

  useEffect(() => {
    const priceSum = todolist.map(El => El.price * El.amount)
    setPay(priceSum.reduce((acc, cur) => acc + cur, 0))
  }, [todolist])

  return (
    <Stack direction='row'>
      {pay}

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        bg='gray.200'
      >
        <Box w='50vw' margin='10px'>
          {todolist.map(el => (
            <Box key={el.id} border='1px' borderColor='gray.600' margin='10px'>
              <Image
                objectFit='cover'
                maxW={{ base: '50%' }}
                src={el.mainImage}
                alt=''
                align='center'
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{el.text}</Heading>

                  <Text>
                    <Text>{el.id}</Text>
                    <Stack direction='row'>
                      <Button
                        type='button'
                        onClick={() => payHandler(el.id, el.amount + 1)}
                      >
                        +
                      </Button>
                      <Text>{el.amount}</Text>
                      <Button
                        type='button'
                        onClick={() => payHandler(el.id, el.amount - 1)}
                      >
                        -
                      </Button>
                    </Stack>
                    <Text>가격:{el.price * el.amount}</Text>
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button
                    variant='solid'
                    colorScheme='blue'
                    onClick={() => dispatch(remove(el.id))}
                  >
                    삭제
                  </Button>
                </CardFooter>
              </Stack>
            </Box>
          ))}
        </Box>
      </Card>
      <Box
        bg='blue.100'
        w='100%'
        h='200px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        flexWrap='wrap'
      >
        <Text> 총 가격: {pay}</Text>
        <Link to='/main'>
          <Button type='button'>돌아가기</Button>
        </Link>
      </Box>
    </Stack>
  )
}
export default Reservation
