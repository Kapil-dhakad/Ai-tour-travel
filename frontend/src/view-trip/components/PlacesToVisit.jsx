import React, { useEffect, useState } from 'react';
import PlaceCardItem from './PlaceCardItem';
import { GetCityImages } from '@/services/ImageApi';

const PlacesToVisit = ({ trip }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    // Fetch image for each place asynchronously
    if (trip?.tripData?.itinerary) {
      trip.tripData.itinerary.forEach(day => {
        day.plan.forEach(place => {
          if (place.placeName && !images[place.placeName]) {
            GetCityImages(place.placeName).then(results => {
              if (results.length > 0) {
                setImages(prev => ({
                  ...prev,
                  [place.placeName]: results[0].urls.small,
                }));
              }
            }).catch(() => {
              // optionally handle errors or set default image here
            });
          }
        });
      });
    }
  }, [trip]);

  return (
    <div className='mt-5'>
      <h2 className='font-bold text-lg'>Places to Visit</h2>
      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div key={index}>
            <h2 className='font-bold text-lg'>{item.day}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {item.plan.map((place, idx) => (
                <div key={idx}>
                  <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                  <PlaceCardItem place={place} image={images[place.placeName]} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
