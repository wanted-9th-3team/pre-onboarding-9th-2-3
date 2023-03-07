import { useState } from 'react'
import Mock_Data from '../data/mock_data.json'
import Modal from '../Modal'

interface IMockData {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: Date
}

function Home() {
  const [isModal, setIsModal] = useState(false)
  return (
    <ul>
      {Mock_Data.map(item => (
        <li key={item.idx}>
          <div>{item.name}</div>
          <button type='button' onClick={() => setIsModal(!isModal)}>
            예약
          </button>
        </li>
      ))}
      {isModal === true ? <Modal /> : null}
    </ul>
  )
}

export default Home
