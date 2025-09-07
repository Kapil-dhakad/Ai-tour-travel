import About from '@/pages/About'
import Home from '@/pages/Home'
import Index from '@/view-trip/tripId'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/view-trip/:tripId' element={<Index/>} />
      
    </Routes>
  )
}

export default AppRouter
