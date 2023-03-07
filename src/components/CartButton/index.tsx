import { Badge, Button } from '@chakra-ui/react'
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons'

function CartButton() {
  return (
    <Button size='sm'>
      <StarIcon />
      <Badge colorScheme='red'>1</Badge>
    </Button>
  )
}

export default CartButton
