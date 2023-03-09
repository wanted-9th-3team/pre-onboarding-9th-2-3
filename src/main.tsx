import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LayoutHeader from './components/ui/layout/Layout-header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <LayoutHeader>
            <App />
          </LayoutHeader>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
