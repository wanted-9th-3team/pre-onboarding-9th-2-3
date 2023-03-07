import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import ProductDetail from '../ProductDetail'
import { dateConverter } from '../../utils/dateConverter'

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
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          width='320px'
          borderWidth='1px'
          rounded='lg'
          shadow='lg'
          position='relative'
          style={{ cursor: 'pointer', transition: '.3s' }}
          onClick={onOpen}
          _hover={{ transform: 'translate(0px, -15px)' }}
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
            </Flex>

            <Flex justifyContent='space-between' alignContent='center'>
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {dateConverter(product.registrationDate)}
              </Box>
              <Box
                fontSize='2xl'
                color={useColorModeValue('gray.800', 'white')}
              >
                <Box as='span' color={'gray.600'} fontSize='lg'>
                  ₩
                </Box>
                {product.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <ProductDetail
        isOpen={isOpen}
        onClose={onClose}
        idx={product.idx}
        name={product.name}
        mainImage={product.mainImage}
        description={product.description}
        spaceCategory={product.spaceCategory}
        price={product.price}
        maximumPurchases={product.maximumPurchases}
        registrationDate={product.registrationDate}
      />
    </>
  )
}

export default ProductItem
