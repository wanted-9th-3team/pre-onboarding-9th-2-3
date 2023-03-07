import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import './App.css'
import getTravelInfo from './api/Travel-api'
import { useAppDispatch } from './store/store'
import { setTravelLists } from './store/travel/travelSlice'

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
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
