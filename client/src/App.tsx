import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PAGE_ONE />} />
        <Route path="/TWO" element={<PAGE_TWO />} />
      </Routes>
    </>
  )
}

export default App
