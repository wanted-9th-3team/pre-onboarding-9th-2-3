import { TypeProduct } from '../../../type'
import { Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../../store/modal-slice'

function CardProduct(props: { product: TypeProduct }) {
  const { product } = props

  const dispatch = useDispatch()

  const setModal = () => {
    dispatch(modalActions.insertModal(product))
  }

  return (
    <Box
      backgroundImage={`url(${product.mainImage})`}
      backgroundPosition={'center'}
      backgroundSize={'inherit'}
      backgroundRepeat={'no-repeat'}
      width={'15rem'}
      height={'23rem'}
      display={'flex'}
      alignItems={'flex-end'}
      margin={3}
      onClick={setModal}
    >
      <Box backgroundColor={'beige'} width={'100%'}>
        <p> {product.idx}</p>
        <h2> {product.name}</h2>
        <p>{product.price}</p>
        <p>{product.spaceCategory}</p>
        <div>
          <button> 예약</button>
        </div>
      </Box>
    </Box>
  )
}
export default CardProduct
