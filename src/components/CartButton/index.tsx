import { Badge, Button } from '@chakra-ui/react'
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons'
import { useAppSelector } from '../../store/config'

function CartButton() {
  const { reserveList } = useAppSelector(state => state.reserve)

  return (
    <Button size='sm'>
      <StarIcon />
      <Badge colorScheme='red'>{reserveList.length}</Badge>
    </Button>
  )
}

export default CartButton
