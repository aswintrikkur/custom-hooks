import { useState } from 'react'
import './App.css'
import { useToggle } from './hooks/useToggle';

function App() {

  const { text, handleToggle } = useToggle();

  return (
    <div className='app-container'>

      <h1>Custom hooks</h1>
      <div className='toggle-container'>
        <p>click to toggle <i class="fa-solid fa-arrow-right"> </i> </p>
        <button className='toggle-btn' onClick={handleToggle} >{text ? 'ON' : 'OFF'}  </button>
      </div>
      <p> this toggle has achieved using custom-hook</p>

    </div>
  )
}

export default App
