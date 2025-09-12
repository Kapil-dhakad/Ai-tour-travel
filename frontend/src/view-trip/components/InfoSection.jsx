import React, { useEffect, useState } from 'react';
import { GetCityImages } from '@/services/ImageApi';
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
  const [cityImage, setCityImage] = useState(null);

  useEffect(() => {
    if (trip?.userSelection?.location?.name) {
      GetCityImages(trip.userSelection.location.name).then(results => {
        if (results.length > 0) {
          setCityImage(results[0].urls.regular);
        }
      }).catch(() => {
        setCityImage(null); // fallback if image fetch fails
      });
    }
  }, [trip]);

  return (
    <div>
      <img
        className='h-[340px] w-full object-cover rounded-xl'
        src={cityImage || '/plane.png'}
        alt={trip?.userSelection?.location?.name || "trip-banner"}
      />
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>
            {trip?.userSelection?.location?.name}
          </h2>
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

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <IoIosSend size={22} />
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
