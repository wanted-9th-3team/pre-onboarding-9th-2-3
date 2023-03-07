import { useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { RootState } from '../../store'
import CardProduct from '../ui/card/Product-card'
import ModalProduct from '../ui/modal/Product-modal'

function Information() {
  const productsInfo = useSelector(
    (state: RootState) => state.productsSlice.allProducts
  )
  const modalInfo = useSelector(
    (state: RootState) => state.modalSlice.modalInfo
  )

  const productsJSX = productsInfo.map(item => (
    <CardProduct key={item.idx} product={item} />
  ))
  return (
    <Box display='flex' alignItems='center' flexWrap='wrap'>
      {productsJSX}
      {modalInfo && <ModalProduct modalInfo={modalInfo} />}
    </Box>
  )
}

export default Information
