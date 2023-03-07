import { useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { RootState } from '../../store'
import CardProduct from '../ui/card/Product-card'

function Information() {
  const productsInfo = useSelector(
    (state: RootState) => state.productsSlice.allProducts
  )

  const productsJSX = productsInfo.map(item => (
    <CardProduct key={item.idx} products={item} />
  ))
  return (
    <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'}>
      {productsJSX}
    </Box>
  )
}

export default Information
