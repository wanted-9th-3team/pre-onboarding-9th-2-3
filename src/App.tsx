import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './App.css'
import Main from './pages/Main'
import Reservations from './pages/Reservations'
import NotFound from './pages/NotFound'
import LayoutHeader from './components/ui/layout/layout-header'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutHeader>
          <Routes>
            <Route path='/' element={<Navigate to='/main' />} />
            <Route path='/main' element={<Main />} />
            <Route path='/reservations' element={<Reservations />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </LayoutHeader>
      </BrowserRouter>
    </Provider>
  )
}

export default App
