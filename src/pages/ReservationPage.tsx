import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { reservationActions } from '../store/reservationSlice'
import ReservationCalc from '../components/reservations/ReservationCalc'
import ReservationInfo from '../components/reservations/ReservationInfo'
import { TypeProduct } from '../type'

function ReservationPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    const reservationInfoInStorage: TypeProduct[] = JSON.parse(
      localStorage.getItem('reservations')!
    )

    const plusQuantity = reservationInfoInStorage.map(item => ({
      ...item,
      quantity: 1,
    }))

    dispatch(reservationActions.putReservationsData(plusQuantity))
  }, [])

  return (
    <>
      <ReservationInfo />
      <ReservationCalc />
    </>
  )
}

export default ReservationPage
