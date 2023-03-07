import { Box } from '@chakra-ui/react'
import { TypeProduct } from '../../../type'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../../store/modal-slice'

function ModalProduct(props: { modalInfo: TypeProduct }) {
  const { modalInfo } = props
  const dispatch = useDispatch()

  // 모달형태의 스타일링은 구현완료
  // 클로즈 모달도 구현 완료
  // content 스타일링 변경 필

  const closeModal = () => {
    dispatch(modalActions.closeModal())
  }

  return (
    <Box>
      <Box
        className='modal-background'
        position='fixed'
        width='100%'
        height='100%'
        top={0}
        left={0}
        backgroundColor='blackAlpha.400'
        zIndex={1}
      ></Box>
      <Box
        className='modal-content'
        backgroundColor={'green.300'}
        backgroundImage={`url(${modalInfo.mainImage})`}
        backgroundPosition='center'
        backgroundSize='inherit'
        backgroundRepeat='no-repeat'
        width='30rem'
        height='25rem'
        position='fixed'
        top='35%'
        left='calc(50% - 15rem)'
        display='flex'
        alignItems='flex-end'
        onClick={closeModal}
        zIndex={2}
      >
        <Box
          className='modal-content-info'
          backgroundColor='beige'
          width='100%'
        >
          <p> {modalInfo.idx}</p>
          <h2> {modalInfo.name}</h2>
          <p>{modalInfo.description}</p>
          <p>{modalInfo.spaceCategory}</p>
          <p>{modalInfo.price}</p>
          <p>{modalInfo.maximumPurchases}</p>
          <p>{modalInfo.registrationDate}</p>
          <div>
            <button type='button'> 예약</button>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default ModalProduct
