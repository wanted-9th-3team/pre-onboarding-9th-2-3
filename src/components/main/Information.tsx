import { useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { RootState } from '../../store'
import CardProduct from '../ui/card/Product-card'
import ModalProduct from '../ui/modal/Product-modal'
import FilterUI from '../ui/filter/ui-filter'
import { filterBySpace, filterByPrice } from '../../util/products-filtering'

function Information() {
  const productsInfo = useSelector(
    (state: RootState) => state.productsSlice.allProducts
  )
  const modalInfo = useSelector(
    (state: RootState) => state.modalSlice.modalInfo
  )

  const filterInfo = useSelector((state: RootState) => state.filterSlice.filter)

  let productsJSX = productsInfo.map(item => (
    <CardProduct key={item.idx} product={item} />
  ))

  if (filterInfo?.maxPrice && filterInfo?.space) {
    const filteredByPrice = filterByPrice(productsInfo, filterInfo)
    const filteredBySpace = filterBySpace(filteredByPrice, filterInfo!)
    productsJSX = filteredBySpace.map(item => (
      <CardProduct key={item.idx} product={item} />
    ))
  } else if (filterInfo?.maxPrice) {
    const filteredByPrice = filterByPrice(productsInfo, filterInfo)
    productsJSX = filteredByPrice.map(item => (
      <CardProduct key={item.idx} product={item} />
    ))
  } else if (filterInfo?.space) {
    const filteredBySpace = filterBySpace(productsInfo, filterInfo!)
    productsJSX = filteredBySpace.map(item => (
      <CardProduct key={item.idx} product={item} />
    ))
  }

  return (
    <Box>
      <FilterUI />
      {modalInfo && <ModalProduct modalInfo={modalInfo} />}
      <Box
        className='main__lists'
        display='flex'
        alignItems='center'
        flexWrap='wrap'
      >
        {productsJSX}
      </Box>
    </Box>
  )
}

export default Information
