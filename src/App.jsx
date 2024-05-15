import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config.jsx';
import MessageParser from './MessageParser.jsx'

import ActionProvider from './ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
     
 
    </>
  )
}

export default App
