import React from 'react'
import { Button } from '../ui/button'
import { NavLink, useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center mx-50 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'> <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        <Button onClick={()=>navigate('/about')}>Get Started, It's Free</Button>
    </div>
  )
}

export default HeroSection
