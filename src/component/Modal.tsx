import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { add } from '../store/slice/reservationSlice'

function ModalComponent({ modalData, isModal, closeModal }: any) {
  const [itemCount, setItemCount] = useState(0)

  const dispatch = useDispatch()
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = modalData[0]
  const actiondata = {
    name: modalData[0].name,
    amount: itemCount,
    price: modalData[0].price,
    mainImage,
  }

  const addCountHandler = () => {
    if (itemCount < modalData[0].maximumPurchases) {
      setItemCount(itemCount + 1)
    }
  }

  const removeCountHandler = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
    }
  }

  return (
    <div>
      <Modal blockScrollOnMount={false} isOpen={isModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>상세 정보</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>번호 : {idx}</div>
            <div>이름 : {name}</div>
            <div>내용 : {description}</div>
            <div>지역 : {spaceCategory}</div>
            <div>가격 : {price}</div>
            <div>최대수량 : {maximumPurchases}</div>
            <div>시간 : {registrationDate}</div>
            <Button type='button' onClick={addCountHandler}>
              +
            </Button>
            {itemCount}
            <Button
              colorScheme='teal'
              _hover={{
                background: 'white',
                color: 'teal.500',
              }}
              type='button'
              onClick={removeCountHandler}
            >
              -
            </Button>
          </ModalBody>
          <ModalFooter>
            <Link to='/reservations'>
              <Button
                colorScheme='cyan'
                size='md'
                variant='solid'
                type='submit'
                onClick={() => dispatch(add(actiondata))}
              >
                장바구니 담기
              </Button>
            </Link>
            <Button variant='ghost' type='button' onClick={removeCountHandler}>
              뒤로가기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalComponent
