import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import { useAppDispatch } from './store/store'
import { getTrip } from './store/trip/tripSlice'
import ReservationPage from './pages/ReservationPage'
import NavigationPage from './pages/NavigationPage'
import './App.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTrip())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<NavigationPage />}>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/reservations' element={<ReservationPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
