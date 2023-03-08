import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RootState } from '../store/store'
import { remove, patch } from '../store/slice/reservationSlice'

function Reservation() {
  const dispatch = useDispatch()
  const todolist = useSelector((state: RootState) => state.reservations)
  // const [todoLists, setTodlLists] = useState(todolist)
  const [pay, setPay] = useState(0)
  const [amountOne, setAmountOne] = useState(0)

  const payHandler = (one: any, tow: any) => {
    const AAAA = {
      id: one,
      amount: tow,
    }

    dispatch(patch(AAAA))
  }

  useEffect(() => {
    const A = todolist.map(El => El.price * El.amount)
    setPay(A.reduce((acc, cur) => acc + cur, 0))
  }, [todolist, dispatch])

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
            <span>{amountOne}</span>
            <button
              type='button'
              onClick={() => payHandler(el.id, el.amount - 1)}
            >
              -
            </button>
            {el.amount}
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
