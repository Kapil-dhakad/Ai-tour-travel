import { Button } from '@/components/ui/button';
import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';

const PlaceCardItem = ({ place, image }) => {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName} target='_blank'>
      <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all'>
        <img className='w-[130px] h-[130px] rounded-xl object-cover' src={image || "/plane.png"} alt={place.placeName} />
        <div>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-400'>{place.placeDetails}</p>
          <h2 className='mt-2'>{place.timeToTravel}</h2>
          <Button><FaMapLocationDot /></Button>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
