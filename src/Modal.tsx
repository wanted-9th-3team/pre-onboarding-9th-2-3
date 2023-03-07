import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { add } from './store/slice/reservationSlice'

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
  const [itemCount, setItemCount] = useState(0)
  const actiondata = {
    name: modalData[0].name,
    amount: itemCount,
    price: modalData[0].price,
  }
  const dispatch = useDispatch()

  const addCountHandler = () => {
    if (itemCount < modalData[0].maximumPurchases) {
      setItemCount(itemCount + 1)
    }
  }

  const removeCountHandler = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
    }
  }

  return (
    <div>
      <div>{modalData[0].idx}</div>

      <button type='button' onClick={addCountHandler}>
        +
      </button>
      {itemCount}
      <button type='button' onClick={removeCountHandler}>
        -
      </button>
      <Link to='/reservations'>
        <button type='submit' onClick={() => dispatch(add(actiondata))}>
          장바구니 담기
        </button>
      </Link>
    </div>
  )
}

export default Modal
