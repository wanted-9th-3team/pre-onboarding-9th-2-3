import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Reservations from './pages/Reservations'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
