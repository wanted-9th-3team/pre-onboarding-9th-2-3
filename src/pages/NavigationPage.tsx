import { Badge, Box, Button, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../components/ui/logo'
import { selectCartCount } from '../store/cart/cartSelector'

function NavigationPage() {
  const cartCount = useSelector(selectCartCount)

  return (
    <>
      <Box
        height='70px'
        width='100%'
        display='flex'
        justifyContent='space-between'
      >
        <Link
          to='/main'
          style={{ height: '100%', width: '200px', padding: '25px' }}
        >
          <Logo />
        </Link>
        <Link
          to='/reservations'
          style={{ height: '100%', width: '200px', padding: '25px' }}
        >
          <Stack>
            <Button colorScheme='teal' size='md' variant='outline'>
              장바구니
              <Badge
                ml='2'
                variant='solid'
                colorScheme='purple'
                fontSize='1rem'
              >
                {cartCount}
              </Badge>
            </Button>
          </Stack>
        </Link>
      </Box>
      <Outlet />
    </>
  )
}

export default NavigationPage
