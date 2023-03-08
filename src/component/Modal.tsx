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
  // const [openol, setOpenol] = useState(false)
  // const modalopen = useSelector((state: RootState) => state.modalslcie)

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

  // const modalhanlder = () => {
  //   setOpen(!open)
  // }

  return (
    <div>
      {/* <Button onClick={isModal}>Open Modal</Button> */}
      <Modal blockScrollOnMount={false} isOpen={isModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>{idx}</div>
            <div>{name}</div>
            <div>{name}</div>
            <div>{description}</div>
            <div>{spaceCategory}</div>
            <div>{price}</div>
            <div>{maximumPurchases}</div>
            <div>{registrationDate}</div>
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
            {/* <Link to='/reservations'>
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
            <button type='button' onClick={removeCountHandler}>
              뒤로가기
            </button> */}
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={closeModal}>
              Close
            </Button> */}
            {/* <Button variant='ghost'>Secondary Action</Button> */}
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

      <button type='button' onClick={removeCountHandler}>
        뒤로가기
      </button>
    </div>
  )
}

export default ModalComponent
