import React, { useState } from 'react'
import './App.css'
import cars from './Pages/cars';
import Home from './Pages/Home'

function App() {

  return (
    <div>
      <Home cars={cars} />
    </div>
  )
}

export default App
