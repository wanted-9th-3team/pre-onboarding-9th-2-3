import { Center, Stack } from '@chakra-ui/react'
import SelectBox from '../components/SelectBox'
import TripList from '../components/trip/TripList'

function MainPage() {
  return (
    <Stack align='center'>
      <Center h='100px'>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>여행 상품 정보</h1>
      </Center>
      <SelectBox />
      <TripList />
    </Stack>
  )
}

export default MainPage
