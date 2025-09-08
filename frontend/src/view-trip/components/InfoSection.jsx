import { GetPlaceDetails } from '@/services/GlobalApi';
import React, { useEffect } from 'react'
import { IoIosSend } from "react-icons/io";

const InfoSection = ({trip}) => {

  useEffect(() => {
   trip&&GetPlacePhoto()
  }, [trip])
  

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location?.name
    }
    const result = await GetPlaceDetails(data).then(res=>{
      console.log(res.data)
    })
  }

  return (
    <div>
      <img
        className='h-[340px] w-full object-cover rounded-xl'
        src='/plane.png'
        alt="trip-banner"
      />
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
          {/* Destination */}
          <h2 className='font-bold text-2xl'>
            {trip?.userSelection?.location?.name}
          </h2>

          {/* Chips */}
          <div className='flex gap-5 flex-wrap'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
              📅 {trip?.userSelection?.days} Days
            </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>
              🥂 Travelers - {trip?.userSelection?.travelers}
            </h2>
          </div>
        </div>

        {/* Share Button */}
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <IoIosSend size={22} />
        </button>
      </div>
    </div>
  )
}

export default InfoSection
