import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import TourItem from '../components/TourItem'
import Header from '../components/Header'

const MainContainer = styled.div``
const TourItemContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`

function Main() {
  const [tourList, setToutList] = useState()

  const getTourList = async () => {
    let res
    try {
      res = await axios.get(' http://localhost:4001/data')
    } catch (error) {}
    setToutList(res?.data)
  }

  useEffect(() => {
    getTourList()
  }, [])

  return (
    <MainContainer>
      <Header />
      <TourItemContainer>
        {tourList &&
          tourList.map((item, index) => {
            return <TourItem key={item.idx} item={item} />
          })}
      </TourItemContainer>
    </MainContainer>
  )
}

export default Main
