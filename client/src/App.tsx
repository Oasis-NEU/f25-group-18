import { Route, Routes } from "react-router-dom"
import { useState } from 'react' // @ts-ignore
import Home from './pages/Home' // @ts-ignore
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
