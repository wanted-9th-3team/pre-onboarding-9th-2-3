import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import ITravelInfo from '../api/TravelDTO'

function TravelCard({
  idx,
  name,
  mainImage,
  price,
  spaceCategory,
}: Partial<ITravelInfo>) {
  return (
    <Card
      direction={{ base: 'row' }}
      overflow='hidden'
      variant='outline'
      width='550px'
      height='120px'
      justify='space-between'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '100px' }}
        align='center'
        src={mainImage}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='1' justify='center'>
        <CardBody>
          <Text size='sm' fontWeight='bold'>
            <Badge colorScheme='green' mr='2'>
              {idx}
            </Badge>
            {name}
          </Text>
          <Stack direction='row' justify='center' align='center'>
            <Text py='2'>위치 : {spaceCategory}</Text>
            <Text color='blue.600' fontSize='md'>
              ${price}
            </Text>
          </Stack>
          <ButtonGroup spacing='2' size='sm'>
            <Button variant='solid' colorScheme='blue'>
              장바구니에 담기
            </Button>
            <Button variant='solid' colorScheme='teal'>
              상세정보
            </Button>
          </ButtonGroup>
        </CardBody>
      </Stack>
      <Button variant='ghost' colorScheme='blue' display='absolute'>
        예약
      </Button>
    </Card>
  )
}

export default TravelCard
