import { Route, Routes, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import ReservationPage from './pages/ReservationPage'
import NotFoundPage from './pages/NotFoundPage'

import { useAppDispatch, handler as getProducts } from './store/productActions'

function App() {
  const disaptch = useAppDispatch()

  useEffect(() => {
    disaptch(getProducts())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/reservations' element={<ReservationPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
