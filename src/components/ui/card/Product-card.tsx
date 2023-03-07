import { TypeProduct } from '../../../type'
import { Box } from '@chakra-ui/react'

function CardProduct(props: { products: TypeProduct }) {
  const { products } = props

  return (
    <Box
      backgroundImage={`url(${products.mainImage})`}
      backgroundPosition={'center'}
      backgroundSize={'inherit'}
      backgroundRepeat={'no-repeat'}
      width={'15rem'}
      height={'23rem'}
      display={'flex'}
      alignItems={'flex-end'}
      margin={3}
    >
      <Box backgroundColor={'beige'} width={'100%'}>
        <p> {products.idx}</p>
        <h2> {products.name}</h2>
        <p>{products.price}</p>
        <p>{products.spaceCategory}</p>
        <div>
          <button> 예약</button>
        </div>
      </Box>
    </Box>
  )
}
export default CardProduct
