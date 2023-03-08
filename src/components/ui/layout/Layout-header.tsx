import { Box, UnorderedList, ListItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const LayoutHeader = (props: { children: React.ReactElement }) => {
  const navigate = useNavigate()
  return (
    <Box>
      <UnorderedList>
        <ListItem onClick={() => navigate('/main')}> 메인</ListItem>
        <ListItem onClick={() => navigate('/reservations')}> 예약</ListItem>
      </UnorderedList>
      {props.children}
    </Box>
  )
}

export default LayoutHeader
