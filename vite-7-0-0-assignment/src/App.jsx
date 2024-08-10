import { useState } from 'react'
import React from 'react'
import './App.css'



// const ImageZoomInOut

function App() {
  const [change, setChange] = useState('Good Morning')

  const handleButtonClick = (change) => {
    setChange(change)
  }

  return (
    <>
      <button>-</button>
      <button>+</button>
      <h1>{change}</h1>
      <div className="card">
        <button onClick={() => handleButtonClick('Good Morning')}>
          English
        </button>
        <button onClick={() => handleButtonClick('Buenos Días')}>
          Spanish
        </button>
        <button onClick={() => handleButtonClick("Bom Dia")}>
          Portuguese
        </button>
        <button onClick={() => handleButtonClick("おはよう")}>
          Japanese
        </button>
        <button onClick={() => handleButtonClick("Salve")}>
          Latin
        </button>
      </div>
    </>
  )
}

export default App
