import { Center } from '@chakra-ui/react'
import ReservationList from '../components/reservation/ReservationList'

function ReservationPage() {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
    >
      <Center h='100px'>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>장바구니</h1>
      </Center>
      <ReservationList />
    </div>
  )
}

export default ReservationPage
