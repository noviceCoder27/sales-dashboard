import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { ProductContextProvider } from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
