import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Badge, Heading, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store/store'

function NavHeader() {
  const reservationList = useSelector(
    (state: RootState) => state.reservation.reservations
  )
  const totalReservation = reservationList.length
  const navigate = useNavigate()
  return (
    <Flex align='center' justify='space-between'>
      <Heading
        size='lg'
        onClick={() => {
          navigate('/main')
        }}
      >
        Home
      </Heading>
      <Button
        rightIcon={<Badge colorScheme='pink'>+{totalReservation}</Badge>}
        onClick={() => {
          navigate('/reservations')
        }}
      >
        장바구니
      </Button>
    </Flex>
  )
}

export default NavHeader
