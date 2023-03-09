import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { closeModal } from '../store/reducers/modal'
import { RootState } from '../store/store'
import { TripDto } from '../dtos/TripDto'

function TripItemDetailModal() {
  const isOpen: boolean = useSelector((state: RootState) => state.modal.isOpen)
  const clickedIdx: number = useSelector(
    (state: RootState) => state.modal.clickedIdx
  )
  const trip: TripDto[] = useSelector(
    (state: RootState) => state.trip.filteredTripItems
  )
  const dispatch = useDispatch()
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        dispatch(closeModal())
      }}
    >
      <ModalOverlay />
      <ModalContent>
        {trip.length <= clickedIdx ? (
          <>잘못된 접근입니다.</>
        ) : (
          <>
            <ModalHeader>
              <Heading size='md'>
                {trip[clickedIdx].idx}. {trip[clickedIdx].name}
              </Heading>
            </ModalHeader>
            <Divider />
            <ModalBody p='5' w='100%'>
              <Image src={trip[clickedIdx].mainImage} w='100%' />
              <Text>{trip[clickedIdx].description}</Text>
              <Text>{trip[clickedIdx].spaceCategory}</Text>
              <Text>{trip[clickedIdx].price}</Text>
              <Text>{trip[clickedIdx].maximumPurchases}</Text>
              <Text>{trip[clickedIdx].registrationDate}</Text>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default TripItemDetailModal
