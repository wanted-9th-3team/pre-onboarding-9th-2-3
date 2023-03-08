import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import ReserveItem from '../components/ReserveItem'

const ReservationItemContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`

function Reservation() {
  const reserveList = useSelector(state => state.reserve.reserve)

  return (
    <>
      <h1>Reservation</h1>
      <ReservationItemContainer>
        {reserveList.map((item, index) => {
          return <ReserveItem key={item.idx} item={item}></ReserveItem>
        })}
      </ReservationItemContainer>
    </>
  )
}

export default Reservation
