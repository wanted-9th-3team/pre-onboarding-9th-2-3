import {
  Card,
  Stack,
  Heading,
  Divider,
  Image,
  ButtonGroup,
  Button,
  CardBody,
  Text,
  CardFooter,
} from '@chakra-ui/react'

function ReserveItem({ item }) {
  return (
    item && (
      <Card maxW='sm'>
        <CardBody>
          <Image src={item.mainImage} alt={item.name} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{`${item.idx}.${item.name}`}</Heading>
            <Text>{item.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              {item.price.toLocaleString()}원
            </Text>
            <Text>{item.spaceCategory}</Text>
          </Stack>
          <Button variant='solid' colorScheme='blue'>
            예약취소
          </Button>
        </CardBody>
      </Card>
    )
  )
}

export default ReserveItem
