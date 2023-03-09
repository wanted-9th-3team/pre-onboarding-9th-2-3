import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import getTravelInfo from './api/travelApi'
import { useAppDispatch } from './store/store'
import { setTravelLists } from './store/trip/tripSlice'
import ReservationPage from './pages/ReservationPage'
import NavigationPage from './pages/NavigationPage'
import './App.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getList = async () => {
      const data = await getTravelInfo()
      if (data) dispatch(setTravelLists(data))
    }
    getList()
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationPage />}>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/reservations' element={<ReservationPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
