import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
 // 2. Wrap ChakraProvider at the root of your app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
