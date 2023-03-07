import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import './App.css'
import Reservations from './pages/Reservations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Main />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
