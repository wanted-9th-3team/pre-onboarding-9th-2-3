import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface CardModalProps {
  onClose: () => void
  isOpen: boolean
  idx: number
}

function CardModal({ onClose, isOpen, idx }: CardModalProps) {
  const travelList = useSelector(
    (state: RootState) => state.travel.selectedtravelList
  )

  return (
    <Modal isOpen={isOpen} size='xl' onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {travelList ? (
          <>
            <ModalHeader>
              <Badge
                colorScheme='green'
                mr='2'
                fontSize='20px'
                width='25px'
                textAlign='center'
                borderRadius='5px'
              >
                {idx}
              </Badge>
              {travelList.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' flexDirection='row'>
              <Stack>
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%' }}
                  align='center'
                  src={travelList.mainImage}
                  alt={travelList.name}
                  borderRadius='lg'
                />
                <Text textAlign='center' fontWeight='bold'>
                  장소: {travelList.spaceCategory}
                </Text>
              </Stack>
              <Stack
                flexDirection='column'
                justify='space-between'
                alignItems='center'
              >
                <Text>예약 일시: {travelList.registrationDate}</Text>
                <Container height='150px' width='300px'>
                  {travelList.description}
                </Container>
                <Text>최대구매수량: {travelList.maximumPurchases}</Text>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Card p='2' mr='4' boxShadow='none' border='1px solid black'>
                <Text fontWeight='bold' textAlign='center'>
                  가격 : ${travelList.price}
                </Text>
              </Card>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        ) : (
          <ModalBody display='flex' flexDirection='row'>
            <Stack
              flexDirection='column'
              justify='space-between'
              alignItems='center'
            >
              <Container height='150px' width='300px'>
                여행정보가 없습니다....
              </Container>
            </Stack>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  )
}

export default CardModal
