import MyTrip from '@/my-trip/MyTrip'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Index from '@/view-trip/tripId'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create-trip" element={<About/>} />
      <Route path='/view-trip/:tripId' element={<Index/>} />
      <Route path='/my-trip' element={<MyTrip/>}/>
      
    </Routes>
  )
}

export default AppRouter
