import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RootState } from '../store/store'
import { remove, patch } from '../store/slice/reservationSlice'

function Reservation() {
  const dispatch = useDispatch()
  const todolist = useSelector((state: RootState) => state.reservations)
  const [pay, setPay] = useState(0)

  const payHandler = (id: number, amount: number) => {
    const patchData = {
      id,
      amount,
    }
    dispatch(patch(patchData))
  }

  useEffect(() => {
    const priceSum = todolist.map(El => El.price * El.amount)
    setPay(priceSum.reduce((acc, cur) => acc + cur, 0))
  }, [todolist])

  return (
    <div>
      <div>
        {todolist.map(el => (
          <div key={el.id}>
            <span>{el.text}</span>
            <span>{el.price}</span>

            <button
              type='button'
              onClick={() => payHandler(el.id, el.amount + 1)}
            >
              +
            </button>
            {el.amount}
            <button
              type='button'
              onClick={() => payHandler(el.id, el.amount - 1)}
            >
              -
            </button>

            <button type='button' onClick={() => dispatch(remove(el.id))}>
              삭제
            </button>
          </div>
        ))}
      </div>
      <Link to='/main'>
        <button type='button'>돌아가기</button>
      </Link>
      {pay}
    </div>
  )
}
export default Reservation
