import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './App.css'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<Main />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
