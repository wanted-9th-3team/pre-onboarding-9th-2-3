import { Card, Center } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import TravelCard from '../components/TravelCard'
import { RootState } from '../store/store'

function Main() {
  const travelLists = useSelector((state: RootState) => state.travel.travelList)
  return (
    <div>
      <Center h='100px'>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>여행 상품 정보</h1>
      </Center>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {travelLists.map(travel => {
          return (
            <TravelCard
              key={travel.idx}
              idx={travel.idx}
              description={travel.description}
              price={travel.price}
              spaceCategory={travel.spaceCategory}
              mainImage={travel.mainImage}
              name={travel.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Main
