import React from 'react'
import { Link } from 'react-router'

const Hotels = ({trip}) => {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recomedation </h2>
      <div  className='grid grid-col-2 md:grid-cols-3 xl:grid-col-4 gap-5 mt-5'>
        {trip?.tripData?.hotels?.map((hotel, index)=>(
            <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.name+","+hotel?.address} traget='_blank'>
           <div className='hover:scale-105 transition-all cursor-pointer'>
             <img className='rounded-xl' src="/plane.png" alt="" />
            <div className='flex flex-col gap-2'>
                <h2 className='font-medium'>{hotel?.name}</h2>
                <h2 className='text-xs text-gray-500'>📍{hotel?.address}</h2>
                <h2 className='text-sm'>💰{hotel?.price}</h2>
                <h2 className='font-medium'>⭐{hotel?.rating}</h2>
            </div>
           </div>
           </Link>
        ))}
      </div>
    </div>
  )
}

export default Hotels
