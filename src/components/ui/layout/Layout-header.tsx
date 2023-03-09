import { Box, UnorderedList, ListItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function LayoutHeader(props: { children: React.ReactElement }) {
  const navigate = useNavigate()

  const { children } = props

  return (
    <Box>
      <UnorderedList>
        <ListItem onClick={() => navigate('/main')}> 메인</ListItem>
        <ListItem onClick={() => navigate('/reservations')}> 예약</ListItem>
      </UnorderedList>
      {children}
    </Box>
  )
}

export default LayoutHeader
