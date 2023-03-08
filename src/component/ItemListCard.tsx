import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import ModalComponent from './Modal'
import Mock_data from '../data/mock_data.json'

interface IMockData {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: string
}

interface IMockDatas {
  items: IMockData
}

function ItemListCard({ items }: IMockDatas): React.ReactElement {
  const [isModal, setIsModal] = useState(false)
  const [modalNumber, setModalNumber] = useState(0)

  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = items
  const modalHandler = (num: number) => {
    const isopened = !isModal
    setIsModal(isopened)
    setModalNumber(num)
  }

  const closeModal = () => {
    setIsModal(false)
  }

  const filteredModal = Mock_data.filter(le => le.idx === modalNumber)

  return (
    <div>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={mainImage}
          alt={description}
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{name}</Heading>

            <Text py='2'>{description}</Text>
            <Text>번호 :{idx}</Text>
            <Text>{spaceCategory}</Text>
            <Text>가격:{price}</Text>
          </CardBody>

          <CardFooter>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={() => modalHandler(idx)}
            >
              예약
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      {isModal === true ? (
        <ModalComponent
          modalData={filteredModal}
          isModal={isModal}
          closeModal={closeModal}
        />
      ) : null}
    </div>
  )
}

export default ItemListCard
