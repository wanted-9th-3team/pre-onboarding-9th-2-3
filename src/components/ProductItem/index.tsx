import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Tooltip,
  Button,
  useToast,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface IProductItemProps {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: string
}

function ProductItem(product: IProductItemProps) {
  const toast = useToast()

  const cartToast = (title: string) => {
    toast({
      title: '상단의 별버튼을 클릭해 장바구니를 확인해보세요 !',
      description: title,
      status: 'success',
      position: 'top',
      isClosable: true,
    })
  }
  return (
    <Flex>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        width='320px'
        borderWidth='1px'
        rounded='lg'
        shadow='lg'
        position='relative'
      >
        <Image
          src={product.mainImage}
          alt={product.description}
          roundedTop='lg'
          sx={{ width: '320px' }}
        />

        <Box p='6'>
          <Box sx={{ display: 'flex' }} alignItems='baseline'>
            <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
              {product.spaceCategory}
            </Badge>
          </Box>
          <Flex mt='1' justifyContent='space-between' alignContent='center'>
            <Box
              fontSize='2xl'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {product.name}
            </Box>
            <Tooltip
              label='장바구니 담기'
              bg='white'
              sx={{ borderRadius: '20px', padding: '10px' }}
              placement={'top'}
              color={'gray.600'}
              fontSize={'1em'}
            >
              <Button
                size='sm'
                onClick={() => {
                  cartToast(product.name)
                }}
              >
                <StarIcon />
              </Button>
            </Tooltip>
          </Flex>

          <Flex justifyContent='space-between' alignContent='center'>
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              잔여상품 {product.maximumPurchases}
            </Box>
            <Box fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
              <Box as='span' color={'gray.600'} fontSize='lg'>
                ₩
              </Box>
              {product.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductItem
