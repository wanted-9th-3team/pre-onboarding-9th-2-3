import { Box, Heading, Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export default function Info() {
  return (
    <Box>
      <Heading as='h2' size='xl' mt={6} mb={2}>
        이런! 조건과 일치하는 상품이 없어요.
      </Heading>
    </Box>
  )
}
