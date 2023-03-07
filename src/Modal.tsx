import { useState } from 'react'
import Mock_Data from './data/mock_data.json'

interface Iidx {
  idx: number
}

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

function Modal({ modalData }: any) {
  // const [data, setData] = useState(Mock_Data)
  console.log(modalData[0].idx)
  return <div>{modalData[0].idx}</div>
}

export default Modal
