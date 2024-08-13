import { useState } from 'react'
import React from 'react'
import './App.css'



// const ImageZoomInOut

function App() {
  const [change, setChange] = useState('Good Morning')

  const handleButtonClick = (change) => {
    setChange(change)
  }

  const [number, setNumber] = useState(60)

  const zoomIn = () => {
    setNumber(prevNumber => prevNumber + 10)
  }

  const zoomOut = () => {
    setNumber(prevNumber => prevNumber - 10)
  }

  return (
    <>
      <button onClick={zoomIn}>+</button>
      <button onClick={zoomOut}>-</button>
      <h1 style={{ fontSize: `${number}px`, animation: 'logo-spin infinite 5s linear' }} className='logo'>{change}</h1 >
      <div className="card">
        <button onClick={() => handleButtonClick('Good Morning!')}>
          English
        </button>
        <button onClick={() => handleButtonClick('Buenos Días!')}>
          Spanish
        </button>
        <button onClick={() => handleButtonClick("Bom Dia!")}>
          Portuguese
        </button>
        <button onClick={() => handleButtonClick("Salve!")}>
          Latin
        </button>
        <button onClick={() => handleButtonClick("おはよう!")}>
          Japanese
        </button>
      </div>
    </>
  )
}

export default App
