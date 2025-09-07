import React from 'react'
import { IoIosSend } from "react-icons/io";

const InfoSection = ({trip}) => {
  return (
    <div>
      <img className='h-[340px] w-full object-cover rounded-xl' src='/plane.png' />
<div className='flex justify-between items-center'>
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.name}</h2>
        <div className='flex gap-5'>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> 📅 {trip?.userSelection?.days} Day</h2>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂 Traveler - {trip?.userSelection?.travelers} </h2>
        </div>
      </div>
      <button><IoIosSend /></button>
      </div>
    </div>
  )
}

export default InfoSection
