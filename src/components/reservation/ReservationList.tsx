import { Button, Stack, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  initCartItem,
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cartSlice'
import { useAppDispatch } from '../../store/store'
import CheckoutItem from './CheckoutItem'

function ReservationList() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const cartItems = useSelector(selectCartItems)
  const totalCartPrice = useSelector(selectCartTotal)
  const orderButtonHandler = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: '결재완료',
        description: '구매하신 상품의 결재가 완료되었습니다.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
      dispatch(initCartItem())
      navigate('/main')
    }, 2000)
  }
  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '500px',
          width: '60%',
          gap: '10px',
          overflowY: 'scroll',
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
          padding: '10px 0',
        }}
      >
        {cartItems &&
          cartItems.map(item => (
            <li key={item.idx}>
              <CheckoutItem items={item} />
            </li>
          ))}
      </ul>
      <Stack
        height='70px'
        width='60%'
        alignItems='center'
        justifyContent='space-between'
        flexDirection='row'
      >
        <Text>총 결재 액: $ {totalCartPrice}</Text>
        <Button
          colorScheme='blue'
          variant='outline'
          onClick={orderButtonHandler}
          isDisabled={!cartItems.length}
          isLoading={isLoading}
        >
          결재하기
        </Button>
      </Stack>
    </>
  )
}

export default ReservationList
