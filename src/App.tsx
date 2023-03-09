import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useAppDispatch } from './store/store'
import { getTrip } from './store/trip/tripSlice'
import './App.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTrip())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
