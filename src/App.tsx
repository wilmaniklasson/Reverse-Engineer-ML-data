import { useState } from 'react'


import './App.css'
import FileBtn from './FileBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FileBtn/>
    </>
  )
}

export default App
